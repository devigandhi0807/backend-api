/**
 *
 * Unitorder
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/UnitOrderDetail/reducer';
import { createStructuredSelector } from 'reselect';
import saga from 'containers/UnitOrderDetail/saga';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/UnitOrderDetail/messages';
import {
  makeIdSelector,
  makeIsLoadingSelector,
  makePageNumberSelector,
  makePageSizeSelector,
  makeuoIdSelector,
} from 'containers/UnitOrderDetail/selectors';
import {
  deleteItemByIdAction,
  getUnitOrderDetailByIdAction,
  queryUnitOrderDetailAction,
  queryUnitOrderDetailsAction,
  setFormMethodAction,
  setIdAction,
  setSearchKeywordAction,
} from 'containers/UnitOrderDetail/actions';
import SearchInput from 'components/SearchInput';
import UnitOrderDetailTable from 'containers/UnitOrderDetail/unitOrderDetailTable';
import CreateUnitOrderDetailModal from 'containers/UnitOrderDetail/createUnitOrderDetailModal';
import FilterUnitOrderDetailModal from 'containers/UnitOrderDetail/filterUnitOrderDetailModal';
import { POST, PUT } from 'utils/constants';
import EditUnitOrderDetailModal from 'containers/UnitOrderDetail/editUnitOrderDetailModal';
import ViewUnitOrderDetailModal from 'containers/UnitOrderDetail/viewUnitOrderDetailModal';
// import { Breadcrumb, Button } from 'antd';
// import { NavLink } from 'react-router-dom';
import { checkPermissionForComponent } from 'utils/permission';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;
const key = 'unit-order-detail';

const stateSelector = createStructuredSelector({
  pageNumber: makePageNumberSelector(),
  pageSize: makePageSizeSelector(),
  isLoading: makeIsLoadingSelector(),
  id: makeIdSelector(),
  uoId: makeuoIdSelector(),
  user: makeLoggedInUserSelector(),
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

  const { user, pageNumber, pageSize, isLoading, id } =
    useSelector(stateSelector);

  const loadUnitOrderDetails = () => dispatch(queryUnitOrderDetailsAction());

  const onFilter = () => loadUnitOrderDetails();

  const onKeywordChange = (keywords) =>
    dispatch(setSearchKeywordAction(keywords)) && loadUnitOrderDetails();
  const onchangeFormMethod = (formMethod) =>
    dispatch(setFormMethodAction(formMethod));
  const onSetId = (entityId) => dispatch(setIdAction(entityId));

  const onCreate = () => {
    onchangeFormMethod(POST);
    setCreateUnitOrderDetail(true);
  };

  const onEdit = (updateId) => {
    onSetId(updateId);
    onchangeFormMethod(PUT);
    setEditUnitOrderDetail(true);
  };

  const onView = (viewId) => {
    onSetId(viewId);
    setViewUnitOrderDetail(true);
  };

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

  return (
    <div className="truthy-wrapper">
      <FormattedMessage {...messages.helmetTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <div className="truthy-breadcrumb">
        <h2>
          <FormattedMessage {...messages.listTitle} />

          {checkPermissionForComponent(user.role, CreateRoutePermission) ? (
            <Button
              type="primary"
              onClick={onCreate}
              style={{ float: 'right' }}
            >
              <PlusOutlined /> <FormattedMessage {...messages.addLabel} />
            </Button>
          ) : null}
        </h2>
      </div>
      <div className="truthy-content-header">
        <div className="d-flex">
          <div className=" search-wrap">
            <SearchInput isLoading={isLoading} onSearch={onKeywordChange} />
          </div>
          <Collapse
            // eslint-disable-next-line react/no-unstable-nested-components
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Panel header="Advanced Filter" key="1">
              <FilterUnitOrderDetailModal
                visible={filterUnitOrderDetail}
                onFilter={onFilter}
              />
            </Panel>
          </Collapse>
        </div>
      </div>

      <div className="truthy-table ">
        <UnitOrderDetailTable
          onCreate={onCreate}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      </div>
      <CreateUnitOrderDetailModal
        visible={createUnitOrderDetail}
        onCancel={() => setCreateUnitOrderDetail(false)}
      />
      <EditUnitOrderDetailModal
        visible={editUnitOrderDetail}
        onCancel={() => setEditUnitOrderDetail(false)}
      />
      <ViewUnitOrderDetailModal
        visible={viewUnitOrderDetail}
        onCancel={() => setViewUnitOrderDetail(false)}
      />
    </div>
  );
}

export default UnitOrderDetail;
