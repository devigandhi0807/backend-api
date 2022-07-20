/**
 *
 * Unitorder
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/Unitorderdetail/reducer';
import { createStructuredSelector } from 'reselect';
import saga from 'containers/Unitorderdetail/saga';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/Unitorderdetail/messages';
import { useParams } from 'react-router-dom';
import {
  makeIdSelector,
  makeIsLoadingSelector,
  makePageNumberSelector,
  makePageSizeSelector,
  makeuoIdSelector,
  makeUnitOrderDetailsSelector,
  makeInitialValuesSelector,
} from 'containers/Unitorderdetail/selectors';
import {
  deleteItemByIdAction,
  getUnitOrderDetailByIdAction,
  queryUnitOrderDetailAction,
  queryUnitOrderDetailsAction,
  setFormMethodAction,
  setIdAction,
  setuoIdAction,
  setSearchKeywordAction,
  setFormValues,
  submitFormAction,
} from 'containers/Unitorderdetail/actions';
import SearchInput from 'components/SearchInput';
//import UnitOrderDetailTable from 'containers/Unitorderdetail/unitOrderDetailTable';
//import CreateUnitOrderDetailModal from 'containers/Unitorderdetail/createUnitOrderDetailModal';
//import FilterUnitOrderDetailModal from 'containers/Unitorderdetail/filterUnitOrderDetailModal';
import { POST, PUT } from 'utils/constants';
//import EditUnitOrderDetailModal from 'containers/Unitorderdetail/editUnitOrderDetailModal';
//import ViewUnitOrderDetailModal from 'containers/Unitorderdetail/viewUnitOrderDetailModal';
// import { Breadcrumb, Button } from 'antd';
// import { NavLink } from 'react-router-dom';
import { checkPermissionForComponent } from 'utils/permission';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse, Form, List, Col, Divider, Row } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import FormInputWrapper from 'components/FormInputWrapper';
import useGetUnitOrderDetailForm from 'containers/Unitorderdetail/hooks/useGetUnitOrderDetailForm';

import { makeDeviceSelector } from 'containers/App/selectors';
import _ from 'lodash';
import UODListRow from './UODListRow';
import UODEditListRow from './UODEditListRow';
const { Panel } = Collapse;
const key = 'unitorderdetail';

const stateSelector = createStructuredSelector({
  pageNumber: makePageNumberSelector(),
  pageSize: makePageSizeSelector(),
  isLoading: makeIsLoadingSelector(),
  id: makeIdSelector(),
  uoId: makeuoIdSelector(),
  user: makeLoggedInUserSelector(),
  uods: makeUnitOrderDetailsSelector(),
  device: makeDeviceSelector(),
  initialValues: makeInitialValuesSelector(),
});

const CreateRoutePermission = {
  resource: 'unitOrderDetail',
  method: POST,
  path: '/:uoId/unit-order-detail',
};

function UnitOrderDetail() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [createUnitOrderDetail, setCreateUnitOrderDetail] = useState(false);
  const [editUnitOrderDetail, setEditUnitOrderDetail] = useState(false);
  const [viewUnitOrderDetail, setViewUnitOrderDetail] = useState(false);
  const [filterUnitOrderDetail, setFilterUnitOrderDetail] = useState(false);

  const {
    uods,
    user,
    pageNumber,
    pageSize,
    isLoading,
    id,
    device,
    initialValues,
  } = useSelector(stateSelector);
  const { uoId } = useParams();
  const [unitorderdetails, setUnitorderdetails] = useState(uods);

  const loadUnitOrderDetails = () => {
    dispatch(setuoIdAction(uoId));
    dispatch(queryUnitOrderDetailsAction());
    setCount(count + unitorderdetails.length);
  };

  const onFilter = () => loadUnitOrderDetails();

  const onKeywordChange = (keywords) =>
    dispatch(setSearchKeywordAction(keywords)) && loadUnitOrderDetails();
  const onchangeFormMethod = (formMethod) =>
    dispatch(setFormMethodAction(formMethod));
  const onSetId = (entityId) => dispatch(setIdAction(entityId));

  // const onCreate = () => {
  //   onchangeFormMethod(POST);
  //   setCreateUnitOrderDetail(true);
  // };

  // const onView = (viewId) => {
  //   onSetId(viewId);
  //   setViewUnitOrderDetail(true);
  // };

  const onDelete = (deleteId) => dispatch(deleteItemByIdAction(deleteId));

  useEffect(() => {
    loadUnitOrderDetails();
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getUnitOrderDetailByIdAction());
    }
  }, [id]);
  useEffect(() => {
    if (id) {
      dispatch(queryUnitOrderDetailAction());
    }
  }, [id]);
  useEffect(() => {
    loadUnitOrderDetails();
  }, [pageNumber, pageSize]);

  const [count, setCount] = useState(0);
  const [editFormData, setEditFormData] = useState(initialValues);
  const [editUodId, setEditUodId] = useState(null);
  const {
    Form,
    form,
    TractNoInput,
    GrossAreaInAcresInput,
    NetAreaInAcresInput,
    PctOfUnitInput,
    OwnershipDisplayNameInput,
    InterestTypeInput,
    CurNotesInput,
    RecStatusInput,
  } = useGetUnitOrderDetailForm({
    device,
  });

  //const [form] = Form.useForm();
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    var constname = 'form_' + count;
    console.log(form);
    // form.resetFields();

    // console.log(unitorderdetails);
  };
  const deleteForm = (id) => {
    console.log(id);
  };
  const removeForm = (id) => {
    setCount(count - 1);
  };
  const onFinish = async (values) => {
    //await form.validateFields();

    dispatch(setFormMethodAction(POST));
    dispatch(setFormValues(JSON.stringify(values)));
    dispatch(submitFormAction());
    console.log('Received values of form:', values);
  };
  const handleEditClick = (e, uod) => {
    e.preventDefault();
    setEditUodId(uod.id);

    const formValues = {
      tract_no: uod.tract_no,
      gross_area_in_acres: uod.gross_area_in_acres,
      net_area_in_acres: uod.net_area_in_acres,
      pct_of_unit: uod.pct_of_unit,
      interest_type: uod.interest_type,
      ownership_display_name: uod.ownership_display_name,
      cur_notes: uod.cur_notes,
      rec_status: uod.rec_status,
    };

    setEditFormData(formValues);
  };

  const handleDeleteClick = (uodId) => {
    const newUODs = [...unitorderdetails];

    const index = unitorderdetails.findIndex(
      (unitorderdetail) => unitorderdetail.id === uodId,
    );

    newUODs.splice(index, 1);
    dispatch(deleteItemByIdAction(uodId));
    setUnitorderdetails(newUODs);
    setEditUodId(null);
  };

  const handleCancelClick = () => {
    setEditUodId(null);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUOD = {
      tract_no: editFormData.tract_no,
      gross_area_in_acres: editFormData.gross_area_in_acres,
      net_area_in_acres: editFormData.net_area_in_acres,
      pct_of_unit: editFormData.pct_of_unit,
      interest_type: editFormData.interest_type,
      ownership_display_name: editFormData.ownership_display_name,
      cur_notes: editFormData.cur_notes,
      rec_status: editFormData.rec_status,
    };

    const newUODs = [...unitorderdetails];

    const index = unitorderdetails.findIndex(
      (unitorderdetail) => unitorderdetail.id === editUodId,
    );

    newUODs[index] = editedUOD;
    // console.log(editUodId);
    onSetId(editUodId);
    dispatch(setFormMethodAction(PUT));
    dispatch(setFormValues(JSON.stringify(editedUOD)));
    dispatch(submitFormAction());
    setUnitorderdetails(newUODs);
    setEditUodId(null);
  };
  // const onEdit = (updateId) => {
  //   onSetId(updateId);
  //   onchangeFormMethod(PUT);
  //   setEditUnitOrderDetail(true);
  // };
  const style = {
    background: '#fafafa',
    borderRight: '1px soild #ccc',
  };

  const [selectedQuestion, toggleQuestion] = useState(-1);

  function openQuestion(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }

  return (
    <div className="truthy-wrapper" style={{ overflowX: 'auto' }}>
      <FormattedMessage {...messages.helmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>

      <div className="truthy-table " style={{ width: '1240px' }}>
        <form onSubmit={handleEditFormSubmit}>
          <div className="truthy-dynamic">
            <Row className="truthy-dynamic-header">
              <Col className="">
                <div style={style}>Tract no</div>
              </Col>
              <Col>
                <div style={style}>Gross area</div>
              </Col>
              <Col>
                <div style={style}>Net area</div>
              </Col>
              <Col>
                <div style={style}>Pct of unit</div>
              </Col>

              <Col>
                <div style={style}>Ownership</div>
              </Col>
              <Col>
                <div style={style}>Cur Notes</div>
              </Col>
              <Col>
                <div style={style}>Interest type</div>
              </Col>
              <Col>
                <div style={style}>Rec Status</div>
              </Col>
              <Col>
                <div style={style}>Action</div>
              </Col>
            </Row>
            {unitorderdetails.length > 0
              ? unitorderdetails.map((unitorderdetail) => (
                  <>
                    {editUodId === unitorderdetail.id ? (
                      <UODEditListRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <UODListRow
                        unitorderdetail={unitorderdetail}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </>
                ))
              : ''}
          </div>
        </form>

        {_.times(count, (i) => (
          <div className="dynamic-form" key={'div_' + i}>
            <Form
              name={i + '_detail'}
              onFinish={onFinish}
              key={i}
              values={initialValues}
            >
              <TractNoInput key={'tract_' + i} />
              <GrossAreaInAcresInput key={'gross_' + i} />
              <NetAreaInAcresInput key={'net_' + i} />
              <PctOfUnitInput key={'pct_' + i} />
              <OwnershipDisplayNameInput key={'owner_' + i} />
              <CurNotesInput key={'cur_' + i} />
              <InterestTypeInput key={'interest_' + i} />
              <RecStatusInput key={'rec_' + i} />
              <div className="ant-col actionbtn">
                <button
                  className="btn-sm-primary"
                  key={'submit_' + i}
                  type="submit"
                >
                  Submit
                </button>
                <button key={'remove_' + i} onClick={() => removeForm(i)}>
                  Remove
                </button>
              </div>
            </Form>
          </div>
        ))}
        <Divider></Divider>

        <button onClick={incrementCount}>Add more</button>
      </div>
    </div>
  );
}

export default UnitOrderDetail;
