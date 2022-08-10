/**
 *
 * IHSProdHeader
 *
 */

import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/Ihswelloneliner/messages';

import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/Ihswelloneliner/reducer';
import { createStructuredSelector } from 'reselect';
import saga from 'containers/Ihswelloneliner/saga';

import {
  makeIdSelector,
  makeIsLoadingSelector,
  makePageNumberSelector,
  makePageSizeSelector,
} from 'containers/Ihswelloneliner/selectors';
import {
  deleteItemByIdAction,
  getIHSWellOneLinerByIdAction,
  queryIHSWellOneLinersAction,
  setFormMethodAction,
  setIdAction,
  setSearchKeywordsAction,
} from 'containers/Ihswelloneliner/actions';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
// @ts-ignore
import { POST, PUT } from 'utils/constants';
import SearchInput from 'components/SearchInput';
import IHSWellOneLinerTable from 'containers/Ihswelloneliner/IHSWellOneLinerTable';
import CreateIHSWellOneLinerModal from 'containers/Ihswelloneliner/createIHSWellOneLinerModal';
import FilterIHSWellOneLinerModal from 'containers/Ihswelloneliner/filterIHSWellOneLinerModal';
import EditIHSWellOneLinerModal from 'containers/Ihswelloneliner/editIHSWellOneLinerModal';
import ViewIHSWellOneLinerModal from 'containers/Ihswelloneliner/viewIHSWellOnelinerModal';
import { Button } from 'antd';
import { checkPermissionForComponent } from 'utils/permission';
import { PlusOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const key = 'ihswelloneliners';

const stateSelector = createStructuredSelector({
  pageNumber: makePageNumberSelector(),
  pageSize: makePageSizeSelector(),
  isLoading: makeIsLoadingSelector(),
  id: makeIdSelector(),
  user: makeLoggedInUserSelector(),
});

const CreateRoutePermission = {
  resource: 'IHSWellOneLiner',
  method: POST,
  path: '/ihs-well-one-liner',
};

function IHSWellOneLiner() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [createIhswelloneliner, setCreateIhswelloneliner] = useState(false);
  const [editIhswelloneliner, setEditIhswelloneliner] = useState(false);
  const [viewIhswelloneliner, setViewIhswelloneliner] = useState(false);
  const [filterIHSProdHeader] = useState(false);

  // @ts-ignore
  const { user, pageNumber, pageSize, isLoading, id } =
    useSelector(stateSelector);

  const loadIHSWellOneLiners = () => dispatch(queryIHSWellOneLinersAction());

  const onFilter = () => loadIHSWellOneLiners();

  const onKeywordChange = (keywords) =>
    dispatch(setSearchKeywordsAction(keywords)) && loadIHSWellOneLiners();
  const onchangeFormMethod = (formMethod) =>
    dispatch(setFormMethodAction(formMethod));
  const onSetId = (entityId) => dispatch(setIdAction(entityId));

  const onCreate = () => {
    onchangeFormMethod(POST);
    setCreateIhswelloneliner(true);
  };

  // @ts-ignore
  const onEdit = (updateId) => {
    onSetId(updateId);
    onchangeFormMethod(PUT);
    setEditIhswelloneliner(true);
  };

  // @ts-ignore
  const onView = (viewId) => {
    onSetId(viewId);
    setViewIhswelloneliner(true);
  };

  const onDelete = (deleteId) => dispatch(deleteItemByIdAction(deleteId));

  useEffect(() => {
    loadIHSWellOneLiners();
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getIHSWellOneLinerByIdAction());
    }
  }, [id]);

  useEffect(() => {
    loadIHSWellOneLiners();
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
              <FilterIHSWellOneLinerModal
                // @ts-ignore
                visible={filterIHSProdHeader}
                onFilter={onFilter}
              />
            </Panel>
          </Collapse>
        </div>
      </div>

      <div className="truthy-table ">
        <IHSWellOneLinerTable
          onCreate={onCreate}
          onEdit={onEdit}
          // @ts-ignore
          onDelete={onDelete}
          onView={onView}
        />
      </div>
      <CreateIHSWellOneLinerModal
        visible={createIhswelloneliner}
        // @ts-ignore
        onCancel={() => setCreateIhswelloneliner(false)}
      />
      <EditIHSWellOneLinerModal
        visible={editIhswelloneliner}
        onCancel={() => setEditIhswelloneliner(false)}
      />
      <ViewIHSWellOneLinerModal
        visible={viewIhswelloneliner}
        onCancel={() => setViewIhswelloneliner(false)}
      />
    </div>
  );
}

export default IHSWellOneLiner;
