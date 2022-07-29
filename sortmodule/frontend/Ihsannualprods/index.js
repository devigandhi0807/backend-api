/**
 *
 * Ihsannualprods
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/Ihsannualprods/reducer';
import { createStructuredSelector } from 'reselect';
import saga from 'containers/Ihsannualprods/saga';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/Ihswelloneliner/messages';
import {
  makeIdSelector,
  makeIsLoadingSelector,
  makePageNumberSelector,
  makePageSizeSelector,
} from 'containers/Ihsannualprods/selectors';
import {
  deleteItemByIdAction,
  getIhsannualprodByIdAction,
  queryIhsannualprodsAction,
  setFormMethodAction,
  setIdAction,
  setSearchKeywordAction,
} from 'containers/Ihsannualprods/actions';
import SearchInput from 'components/SearchInput';
import IhsannualprodTable from 'containers/Ihsannualprods/ihsannualprodTable';
import CreateIhsannualprodModal from 'containers/Ihsannualprods/createIhsannualprodModal';
import FilterIhsannualprodModal from 'containers/Ihsannualprods/filterIhsannualprodModal';
import { POST, PUT } from 'utils/constants';
import EditIhsannualprodModal from 'containers/Ihsannualprods/editIhsannualprodModal';
import ViewIhsannualprodModal from 'containers/Ihsannualprods/viewIhsannualprodModal';
import { Breadcrumb, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { checkPermissionForComponent } from 'utils/permission';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const key = 'ihsannualprods';

const stateSelector = createStructuredSelector({
  pageNumber: makePageNumberSelector(),
  pageSize: makePageSizeSelector(),
  isLoading: makeIsLoadingSelector(),
  id: makeIdSelector(),
  user: makeLoggedInUserSelector(),
});

const CreateRoutePermission = {
  resource: 'ihsannualprod',
  method: POST,
  path: '/ihsannualprods',
};

const Ihsannualprods = () => {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [createIhsannualprod, setCreateIhsannualprod] = useState(false);
  const [editIhsannualprod, setEditIhsannualprod] = useState(false);
  const [viewIhsannualprod, setViewIhsannualprod] = useState(false);
  const [filterIhsannualprod, setFilterIhsannualprod] = useState(false);

  const { user, pageNumber, pageSize, isLoading, id } =
    useSelector(stateSelector);

  const loadIhsannualprods = () => dispatch(queryIhsannualprodsAction());

  const onFilter = () => loadIhsannualprods();

  const onKeywordChange = (keywords) =>
    dispatch(setSearchKeywordAction(keywords)) && loadIhsannualprods();
  const onchangeFormMethod = (formMethod) =>
    dispatch(setFormMethodAction(formMethod));
  const onSetId = (entityId) => dispatch(setIdAction(entityId));

  const onCreate = () => {
    onchangeFormMethod(POST);
    setCreateIhsannualprod(true);
  };

  const onEdit = (updateId) => {
    onSetId(updateId);
    onchangeFormMethod(PUT);
    setEditIhsannualprod(true);
  };

  const onView = (viewId) => {
    onSetId(viewId);
    setViewIhsannualprod(true);
  };

  const onDelete = (deleteId) => dispatch(deleteItemByIdAction(deleteId));

  useEffect(() => {
    loadIhsannualprods();
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getIhsannualprodByIdAction());
    }
  }, [id]);

  useEffect(() => {
    loadIhsannualprods();
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
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            <Panel header="Advanced Filter" key="1">
              <FilterIhsannualprodModal
                visible={filterIhsannualprod}
                onFilter={onFilter}
              />
            </Panel>
          </Collapse>
        </div>
      </div>

      <div className="truthy-table ">
        <IhsannualprodTable
          onCreate={onCreate}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      </div>
      <CreateIhsannualprodModal
        visible={createIhsannualprod}
        onCancel={() => setCreateIhsannualprod(false)}
      />
      <EditIhsannualprodModal
        visible={editIhsannualprod}
        onCancel={() => setEditIhsannualprod(false)}
      />
      <ViewIhsannualprodModal
        visible={viewIhsannualprod}
        onCancel={() => setViewIhsannualprod(false)}
      />
    </div>
  );
};

export default Ihsannualprods;
