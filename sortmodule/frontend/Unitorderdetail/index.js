/**
 *
 * Unitorder
 *
 */

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/Unitorderdetail/reducer';
import { createStructuredSelector } from 'reselect';
import saga from 'containers/Unitorderdetail/saga';
import Helmet from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';
//import messages from 'containers/Unitorderdetail/messages';
import { useParams } from 'react-router-dom';
import {
  makeIdSelector,
  makeIsLoadingSelector,
  makePageNumberSelector,
  makePageSizeSelector,
  makeuoIdSelector,
  makeUnitOrderDetailsSelector,
  makeInitialValuesSelector,
  makeErrorSelector,
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
  setSortColNameAction,
  setSortOrderAction,
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
import {
  PlusOutlined,
  CaretRightOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
  Button,
  Collapse,
  Form,
  List,
  Col,
  Divider,
  Row,
  Card,
  Table,
  Popconfirm,
  Space,
  Input,
  InputNumber,
} from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import FormInputWrapper from 'components/FormInputWrapper';
import useGetUnitOrderDetailForm from 'containers/Unitorderdetail/hooks/useGetUnitOrderDetailForm';

import { makeDeviceSelector } from 'containers/App/selectors';
import UODListRow from './UODListRow';
import UODEditListRow from './UODEditListRow';
//Drag and drop
import { DragOutlined } from '@ant-design/icons';
import dragula from 'dragula';
import 'dragula/dist/dragula.css';

const { Panel } = Collapse;
const key = 'unitorderdetail';
const gridStyle = (React.CSSProperties = {
  width: '25%',
  padding: '8px',
  textAlign: 'left',
});
const linkgridStyle = (React.CSSProperties = {
  width: '75%',
  minHeight: '38px',
  padding: '3px 8px',
  textAlign: 'left',
});

// .gu-mirror {
//   background-color: rgba(16, 142, 233, 0.15);
//   cursor: grabbing;
//   cursor: -moz-grabbing;
//   cursor: -webkit-grabbing;
// }

const stateSelector = createStructuredSelector({
  pageNumber: makePageNumberSelector(),
  pageSize: makePageSizeSelector(),
  isLoading: makeIsLoadingSelector(),
  id: makeIdSelector(),
  errors: makeErrorSelector(),
  // uoId: makeuoIdSelector(),
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
  const [sum_net_area_in_acres, set_sum_net_area_in_acres] = useState(0);
  const [sum_pct_of_unit, set_sum_pct_of_unit] = useState(0);

  const {
    uods,
    user,
    pageNumber,
    pageSize,
    isLoading,
    id,
    device,
    initialValues,
    errors,
  } = useSelector(stateSelector);
  //const { uoIdd } = useParams();
  const { uoId } = useParams();
  const loadUnitOrderDetails = () => {
    // dispatch(setuoIdAction(uoIdd));
    dispatch(setuoIdAction(uoId));
    dispatch(queryUnitOrderDetailsAction());
    // setCount(count + unitorderdetails.length);
  };

  const [unitorderdetails, setUnitorderdetails] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    loadUnitOrderDetails();
    setUnitorderdetails(uods);
  }, []);
  // useEffect(() => {
  //   setUnitorderdetails(uods);
  //   form.resetFields();
  //   setEditUodId(null);
  // }, [uods]); // set the relation between redux campaign and local state

  // useEffect(() => {
  //   if (unitorderdetails.unitOrderDetails) {
  //     set_sum_net_area_in_acres(
  //       unitorderdetails.unitOrderDetails.reduce(
  //         (a, v) => (a = Number(a) + Number(v.net_area_in_acres)),
  //         0,
  //       ),
  //     );
  //     set_sum_pct_of_unit(
  //       unitorderdetails.unitOrderDetails.reduce(
  //         (b, v) => (b = Number(b) + Number(v.pct_of_unit)),
  //         0,
  //       ),
  //     );
  //   }
  // }, [unitorderdetails]);

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

  // useEffect(() => {
  //   loadUnitOrderDetails();
  //   //setUnitorderdetails(uods);
  // }, [pageNumber, pageSize]);

  //const [editFormData, setEditFormData] = useState(null);
  //const [editUodId, setEditUodId] = useState(null);

  // const {
  //   Form,
  //   form,
  //   TractNoInput,
  //   GrossAreaInAcresInput,
  //   NetAreaInAcresInput,
  //   PctOfUnitInput,
  //   OwnershipDisplayNameInput,
  //   InterestTypeInput,
  //   RecStatusInput,
  // } = useGetUnitOrderDetailForm({
  //   device,
  // });
  // const {
  //   Form: FromEdit,
  //   form: formEdit,
  //   TractNoInput: TractNoInputEdit,
  //   GrossAreaInAcresInput: GrossAreaInAcresInputEdit,
  //   NetAreaInAcresInput: NetAreaInAcresInputEdit,
  //   PctOfUnitInput: PctOfUnitInputEdit,
  //   OwnershipDisplayNameInput: OwnershipDisplayNameInputEdit,
  //   InterestTypeInput: InterestTypeInputEdit,
  //   RecStatusInput: RecStatusInputEdit,
  // } = useGetUnitOrderDetailForm({
  //   device,
  // });

  // useEffect(() => {
  //   formEdit.resetFields();
  // }, [editFormData]);

  // useEffect(() => {
  //   if (errors?.length) {
  //     form.setFields(errors);
  //     formEdit.setFields(errors);
  //   }
  // }, [errors]);

  //const [form] = Form.useForm();
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    var constname = 'form_' + count;
    //initialValues = null;
    // console.log(form);
    // form.resetFields();

    // console.log(unitorderdetails);
  };
  // useEffect(() => {
  //   setEditUodId(null);
  //   onSetId(null);
  //   form.resetFields();
  // }, [count]);
  // const deleteForm = (id) => {
  //   console.log(id);
  // };
  // const removeForm = (id) => {
  //   setCount(count - 1);
  // };
  // const onFinish = async (values) => {
  //   //await form.validateFields();
  //   // e.preventDefault();
  //   dispatch(setFormMethodAction(POST));

  //   dispatch(setFormValues(JSON.stringify(values)));
  //   dispatch(submitFormAction());

  //   console.log('Received values of form:', values);
  // };

  // const onFinishEdit = async (values) => {
  //   //await form.validateFields();
  //   // e.preventDefault();
  //   dispatch(setFormMethodAction(PUT));

  //   dispatch(setFormValues(JSON.stringify(values)));
  //   dispatch(submitFormAction());

  //   console.log('Received values of form:', values);
  // };

  // const handleEditClick = (e, uod) => {
  //   e.preventDefault();
  //   setEditFormData(null);
  //   setCount(0);
  //   setEditUodId(uod.id);
  //   onSetId(uod.id);
  //   setEditFormData(uod);

  /*   const formValues = {
      tract_no: uod.tract_no,
      gross_area_in_acres: uod.gross_area_in_acres,
      net_area_in_acres: uod.net_area_in_acres,
      pct_of_unit: uod.pct_of_unit,
      interest_type: uod.interest_type,
      ownership_display_name: uod.ownership_display_name,
    //  rec_status: uod.rec_status,
    };

    setEditFormData(formValues);*/
  //};

  // const handleDeleteClick = (uodId, close) => {
  //   const newUODs = [...unitorderdetails.unitOrderDetails];

  //   const index = unitorderdetails.unitOrderDetails.findIndex(
  //     (unitorderdetail) => unitorderdetail.id === uodId,
  //   );

  //   newUODs.splice(index, 1);
  //   dispatch(deleteItemByIdAction(uodId));
  //   setUnitorderdetails(newUODs);
  //   setEditUodId(null);
  //   close();
  // };

  const handleCancelClick = () => {
    setEditUodId(null);
  };

  const style = {
    background: '#fafafa',
    borderRight: '1px soild #ccc',
  };

  function sumBy(values, key) {
    return values.reduce((total, value) => (total += value[key]), 0);
  }

  console.log(unitorderdetails);
  //const uodData = [];
  const uodData = unitorderdetails.map((uod, i) => {
    if (uod !== undefined) {
      return { ...uod, key: uod.id };
    } else {
      return { ...uod, key: i };
    }
  });

  const handleDelete = (key) => {
    const newUODs = [...uodData];

    const index = uodData.findIndex((data) => data.key === key);
    newUODs.splice(index, 1);
    dispatch(deleteItemByIdAction(key));
    setUnitorderdetails(newUODs);
    setEditRowKey('');
  };
  const [editRowKey, setEditRowKey] = useState('');
  //const type = 'DraggableBodyRow';
  //const tableRef = useRef();
  const [form] = Form.useForm();
  const isEditRow = (record) => {
    return record.key === editRowKey;
  };
  const save = async (key) => {
    const row = await form.validateFields();

    // dispatch(setFormValues({ ...row }));
    dispatch(submitFormAction());
    const newUODs = [...uodData];

    const index = uodData.findIndex((data) => data.key === key);
    if (index > -1) {
      const item = newUODs[index];
      newUODs.splice(index, 1, { ...item, ...row });
      setUnitorderdetails(newUODs);
      setEditRowKey('');
    }

    onSetId(key);
    dispatch(setFormMethodAction(PUT));
    dispatch(setFormValues(JSON.stringify(row)));
    dispatch(submitFormAction());
  };
  const cancel = () => {
    setEditRowKey('');
  };
  const editRow = (record) => {
    form.setFieldsValue({ ...record });
    setEditRowKey(record.key);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: '100',
      editTable: false,
    },
    {
      title: 'Tract No',
      dataIndex: 'tract_no',
      width: '100',
      editTable: true,
      sorter: (a, b) => a.tract_no.length - b.tract_no.length,
    },
    {
      title: 'Gross Area in Acres',
      dataIndex: 'gross_area_in_acres',
      width: '100',
      editTable: true,
      sorter: (a, b) =>
        a.gross_area_in_acres.length - b.gross_area_in_acres.length,
    },
    {
      title: 'Net Area in Acres',
      dataIndex: 'net_area_in_acres',
      width: '100',
      editTable: true,
      sorter: (a, b) => a.net_area_in_acres.length - b.net_area_in_acres.length,
    },
    {
      title: 'PCT of Unit',
      dataIndex: 'pct_of_unit',
      width: '100',
      editTable: true,
      sorter: (a, b) => a.pct_of_unit.length - b.pct_of_unit.length,
    },
    {
      title: 'Ownership Display Name',
      dataIndex: 'ownership_display_name',
      width: '100',
      editTable: true,
      sorter: (a, b) =>
        a.ownership_display_name.length - b.ownership_display_name.length,
    },
    {
      title: 'Interest Type',
      dataIndex: 'interest_type',
      width: '100',
      editTable: true,
      render: (_, record) => (
        <select name="interest_type" value={record.interest_type} disabled>
          <option value="1">Mineral Interest</option>
          <option value="2">Working Interest</option>
          <option value="3">Unleased Mineral Interest</option>
        </select>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '100',
      render: (_, record) => {
        const editable = isEditRow(record);
        return unitorderdetails.length >= 1 ? (
          <Space>
            {editable ? (
              <span>
                <Space size={'middle'}>
                  <Button type="primary" onClick={() => save(record.key)}>
                    save
                  </Button>
                  <Popconfirm
                    title="Are you sure to cancel?"
                    onConfirm={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button>Cancel</Button>
                  </Popconfirm>
                </Space>
              </span>
            ) : (
              <Button type="primary" onClick={() => editRow(record)}>
                Edit
              </Button>
            )}
            <Popconfirm
              title="Are you sure want to delete?"
              onConfirm={() => handleDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger type="primary" disabled={editable}>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ) : (
          ''
        );
      },
    },
  ];
  const mergedColumns = columns.map((column) => {
    if (!column.editTable) {
      return column;
    }
    return {
      ...column,
      onCell: (record) => ({
        record,
        dataIndex: column.dataIndex,
        inputType:
          column.dataIndex === 'ownership_display_name' ||
          column.dataIndex === 'tract_no'
            ? 'text'
            : 'number',
        title: (
          <DragOutlined className="draggable" type="swap">
            column.title
          </DragOutlined>
        ),
        editing: isEditRow(record),
      }),
    };
  });
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {dataIndex === 'interest_type' ? (
              <select name={dataIndex} value={record.interest_type}>
                <option value="1">Mineral Interest</option>
                <option value="2">Working Interest</option>
                <option value="3">Unleased Mineral Interest</option>
              </select>
            ) : (
              inputNode
            )}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const [col, setCol] = useState('');
  const [order, setOrder] = useState('ASC');
  // const [orderInfo, setOrderInfo] = useState({});
  useEffect(() => {
    dispatch(setSortColNameAction(col));
    dispatch(setSortOrderAction(order));
    dispatch(queryUnitOrderDetailsAction());
  }, [col, order]);
  const handleSorterChange = (...sort) => {
    const { order, field } = sort[2];
    //setOrderInfo({columnKey:field,order})
    if (order === 'ascend') {
      setCol(field);
      setOrder('ASC');
    }
    if (order === 'descend') {
      setCol(field);
      setOrder('DESC');
    }
  };
  const reset = () => {
    dispatch(queryUnitOrderDetailsAction());
  };
  // const DraggableRow = ({ index, moveRow, className, style, ...restProps }) => {
  //   const ref = useRef();
  //   const [{ isOver, dropClassName }, drop] = useDrop({
  //     accept: type,
  //     collect: (monitor) => {
  //       const { index: dragIndex } = monitor.getItem() || {};
  //       if (dragIndex === index) {
  //         return {};
  //       }
  //       return {
  //         isOver: monitor.isOver(),
  //         dropClassName:
  //           dragIndex < index ? 'drop-down-downward' : 'drop-over-upward',
  //       };
  //     },
  //     drop: (item) => {
  //       moveRow(item.index, index);
  //     },
  //   });
  //   const [, drag] = useDrag({
  //     type,
  //     item: index,
  //     collect: (monitor) => {
  //       isDragging: monitor.isDragging();
  //     },
  //   });
  //   drop(drag(ref));
  //   return (
  //     <tr
  //       ref={ref}
  //       className={`${className}${isOver ? dropClassName : ''}`}
  //       style={{ cursor: 'move', ...style }}
  //       {...restProps}
  //     />
  //   );
  // };
  // const moveRow = useCallback(
  //   (dragIndex, hoverIndex) => {
  //     alert(dragIndex);

  //     const dragRow = uodData[dragIndex];
  //     console.log(dragRow);
  //     update(uodData, {
  //       $splice: [
  //         [dragIndex, 1],
  //         [hoverIndex, 0, dragRow],
  //       ],
  //     });

  //     setUnitorderdetails(uodData);
  //   },
  //   [uodData],
  // );
  const getIndexInParent = (el) =>
    Array.from(el.parentNode.children).indexOf(el);
  const handleReorder = (dragIndex, draggedIndex) => {
    setUnitorderdetails((oldState) => {
      const newState = [...oldState];
      const item = newState.splice(dragIndex, 1)[0];
      newState.splice(draggedIndex, 0, item);
      return newState;
    });
  };

  useEffect(() => {
    let start;
    let end;
    const container = document.querySelector('.ant-table-tbody');
    const drake = dragula([container], {
      moves: (el) => {
        start = getIndexInParent(el);
        return true;
      },
    });

    drake.on('drop', (el) => {
      end = getIndexInParent(el);
      handleReorder(start, end);
    });
  }, []);
  return (
    <>
      <Space>
        <Button onClick={reset}>Reset</Button>
      </Space>

      <Form form={form} component={false}>
        {/* <DndProvider backend={HTML5Backend}> */}
        <Table
          // ref={tableRef}
          pagination={false}
          loading={isLoading}
          columns={mergedColumns}
          components={{
            body: {
              cell: EditableCell,
              // row: DraggableRow,
            },
          }}
          //  onRow={(record, rowIndex) => ({ rowIndex, moveRow })}

          dataSource={uodData}
          onChange={handleSorterChange}
          // scroll={{ x: 1800 }}
        ></Table>
        {/* </DndProvider> */}
      </Form>
    </>
    // <div className="truthy-wrapper" style={{ overflowX: 'auto' }}>

    //   <h3>Unitorder-detail #{unitorderdetails.id}</h3>

    //   <Card className="unitorderDetail-card">
    //     <Card.Grid hoverable={false} style={gridStyle}>
    //       <small>County name: {unitorderdetails.county_name}</small>
    //     </Card.Grid>
    //     <Card.Grid hoverable={false} style={gridStyle}>
    //       <small>Section : {unitorderdetails.section}</small>
    //     </Card.Grid>
    //     <Card.Grid hoverable={false} style={gridStyle}>
    //       <small>Township : {unitorderdetails.township}</small>
    //     </Card.Grid>
    //     <Card.Grid hoverable={false} style={gridStyle}>
    //       <small>Range : {unitorderdetails.range}</small>
    //     </Card.Grid>
    //     <Card.Grid hoverable={false} style={gridStyle}>
    //       <small>Operator name: {unitorderdetails.operator_name}</small>
    //     </Card.Grid>
    //     <Card.Grid hoverable={false} style={linkgridStyle}>
    //       <small>
    //         {unitorderdetails.unitorder_link}
    //         <a
    //           style={{ fontSize: '11px' }}
    //           className="ant-btn ant-btn-text ant-btn-dangerous"
    //           href={unitorderdetails.unitorder_link}
    //           target="_blank"
    //         >
    //           {' '}
    //           View Pdf
    //         </a>
    //       </small>
    //     </Card.Grid>
    //   </Card>
    //   <br />
    //   <div className="truthy-table " style={{ width: '1100px' }}>
    //     <div className="truthy-dynamic">
    //       <Row className="truthy-dynamic-header">
    //         <Col className="">
    //           <div style={style}>Tract no</div>
    //         </Col>
    //         <Col style={{ width: '20%' }}>
    //           <div style={style}>Ownership</div>
    //         </Col>
    //         <Col>
    //           <div style={style}>Gross area</div>
    //         </Col>
    //         <Col>
    //           <div style={style}>Net area</div>
    //         </Col>
    //         <Col>
    //           <div style={style}>Pct of unit</div>
    //         </Col>

    //         <Col>
    //           <div style={style}>Interest type</div>
    //         </Col>

    //         <Col style={{ width: '18%' }}>
    //           <div style={style}>Action</div>
    //         </Col>
    //       </Row>

    //       {unitorderdetails.unitOrderDetails
    //         ? unitorderdetails.unitOrderDetails.map((unitorderdetail) => (
    //             <React.Fragment key={unitorderdetail.id + 'fragmentkey'}>
    //               {editUodId === unitorderdetail.id ? (
    //                 <div
    //                   className="dynamic-form"
    //                   key={'div_' + unitorderdetail.id}
    //                 >
    //                   <FromEdit
    //                     name={unitorderdetail.id + '_detail'}
    //                     onFinish={onFinishEdit}
    //                     key={unitorderdetail.id + '_detail_form'}
    //                     values={editFormData}
    //                   >
    //                     <TractNoInputEdit key={'tract_' + unitorderdetail.id} />
    //                     <OwnershipDisplayNameInputEdit
    //                       style={{ width: '20%' }}
    //                       key={'owner_' + unitorderdetail.id}
    //                     />
    //                     <GrossAreaInAcresInputEdit
    //                       key={'gross_' + unitorderdetail.id}
    //                     />
    //                     <NetAreaInAcresInputEdit
    //                       key={'net_' + unitorderdetail.id}
    //                     />
    //                     <PctOfUnitInputEdit key={'pct_' + unitorderdetail.id} />
    //                     <InterestTypeInputEdit
    //                       key={'interest_' + unitorderdetail.id}
    //                     />

    //                     <div
    //                       className="ant-col actionbtn"
    //                       style={{ width: '18%' }}
    //                     >
    //                       <Button
    //                         className="btn-sm-primary"
    //                         key={'update_' + unitorderdetail.id}
    //                         htmlType="submit"
    //                       >
    //                         Update
    //                       </Button>
    //                       <Button
    //                         key={'cancel_' + unitorderdetail.id}
    //                         onClick={handleCancelClick}
    //                       >
    //                         Cancel
    //                       </Button>
    //                     </div>
    //                   </FromEdit>
    //                 </div>
    //               ) : (
    //                 <UODListRow
    //                   unitorderdetail={unitorderdetail}
    //                   handleEditClick={handleEditClick}
    //                   handleDeleteClick={handleDeleteClick}
    //                 />
    //               )}
    //             </React.Fragment>
    //           ))
    //         : ''}
    //     </div>

    //     {_.times(count, (i) => (
    //       <div className="dynamic-form" key={'div_' + i}>
    //         <Form
    //           name={i + '_detail'}
    //           onFinish={onFinish}
    //           key={i + '_detail_form'}
    //         >
    //           <TractNoInput key={'tract_' + i} />
    //           <OwnershipDisplayNameInput
    //             style={{ width: '20%' }}
    //             key={'owner_' + i}
    //           />
    //           <GrossAreaInAcresInput key={'gross_' + i} />
    //           <NetAreaInAcresInput key={'net_' + i} />
    //           <PctOfUnitInput key={'pct_' + i} />
    //           <InterestTypeInput key={'interest_' + i} />

    //           <div className="ant-col actionbtn" style={{ width: '18%' }}>
    //             <Button
    //               className="btn-sm-primary"
    //               key={'submit_' + i}
    //               htmlType="submit"
    //             >
    //               Submit
    //             </Button>
    //             <Button key={'remove_' + i} onClick={() => removeForm(i)}>
    //               Remove
    //             </Button>
    //           </div>
    //         </Form>
    //       </div>
    //     ))}
    //     <div className="truthy-dynamic">
    //       <Row className="truthy-dynamic-body">
    //         <Col className="">
    //           <div style={style}>
    //             <b>Total</b>
    //           </div>
    //         </Col>
    //         <Col style={{ width: '20%' }}>
    //           <div style={style}></div>
    //         </Col>
    //         <Col>
    //           <div style={style}> {sum_net_area_in_acres}</div>
    //         </Col>
    //         <Col>
    //           <div style={style}> {sum_pct_of_unit}</div>
    //         </Col>

    //         <Col>
    //           <div style={style}></div>
    //         </Col>
    //         <Col>
    //           <div style={style}></div>
    //         </Col>

    //         <Col>
    //           <div style={style}></div>
    //         </Col>
    //       </Row>
    //     </div>
    //     <Divider></Divider>

    //     <Button disabled={count == 1} onClick={incrementCount}>
    //       Add more
    //     </Button>
    //   </div>
    // </div>
  );
}

export default UnitOrderDetail;
