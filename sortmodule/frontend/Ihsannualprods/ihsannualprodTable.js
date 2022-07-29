import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from 'containers/Ihsannualprods/messages';
import commonMessages from 'common/messages';
import { useDispatch, useSelector } from 'react-redux';
import {
  queryIhsannualprodsAction,
  setPageNumberAction,
  setPageSizeAction,
  setSortColNameAction,
  setSortOrderAction,
} from 'containers/Ihsannualprods/actions';
import { Table, Tag, Modal, Menu, Dropdown, Space } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  makeIsLoadingSelector,
  makeIhsannualprodsSelector,
} from 'containers/Ihsannualprods/selectors';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { checkPermissionForComponent } from 'utils/permission';
import PropTypes from 'prop-types';
import { PUT, DELETE } from 'utils/constants';
import { NavLink } from 'react-router-dom';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import ToolTipButtonWrapper from 'components/ToolTipButtonWrapper';
import { useState } from 'react';
import { useEffect } from 'react';

const stateSelector = createStructuredSelector({
  isLoading: makeIsLoadingSelector(),
  ihsannualprods: makeIhsannualprodsSelector(),
  user: makeLoggedInUserSelector(),
});

const EditRoutePermission = {
  resource: 'ihsannualprod',
  method: PUT,
  path: '/ihsannualprods/:id',
};

const DeleteRoutePermission = {
  resource: 'ihsannualprod',
  method: DELETE,
  path: '/ihsannualprods/:id',
};

function IhsannualprodTable(props) {
  const { onEdit, onDelete, onView } = props;
  const { ihsannualprods, user, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const intl = useIntl();
  //console.log(ihsannualprods);
  const paginationOptions = {
    showSizeChanger: true,
    showQuickJumper: true,
    onShowSizeChange: (_, pageSize) => {
      dispatch(setPageSizeAction(pageSize));
    },
    onChange: (page) => {
      dispatch(setPageNumberAction(page));
    },
    pageSizeOptions: [5, 10, 20, 30, 50, 100],
    total: ihsannualprods.totalItems,
    showTotal: (total, range) => (
      <FormattedMessage
        {...commonMessages.pagination}
        values={{ start: range[0], end: range[1], total }}
      />
    ),
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'A':
        return 'success';
      case 'D':
        return 'error';
      default:
        return 'success';
    }
  };
  const listMenu = (id) => (
    <Menu>
      <Menu.Item key={'aprod_view' + id}>
        <ToolTipButtonWrapper
          placement="right"
          title={commonMessages.viewLabel}
          clickEvent={() => onView(id)}
        >
          <EyeOutlined />
        </ToolTipButtonWrapper>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={'aprod_remove' + id}>
        <ToolTipButtonWrapper
          danger
          color="#f44336"
          placement="right"
          title={commonMessages.removeLabel}
          clickEvent={() => {
            Modal.confirm({
              okText: intl.formatMessage(commonMessages.yesLabel),
              okType: 'danger',
              cancelText: intl.formatMessage(commonMessages.noLabel),
              icon: <ExclamationCircleOutlined />,
              title: intl.formatMessage(commonMessages.confirmationMessage),
              onOk: (close) => onDelete(id) && close(),
            });
          }}
        >
          <DeleteOutlined />
        </ToolTipButtonWrapper>
      </Menu.Item>
    </Menu>
  );
  const [col, setCol] = useState('');
  const [order, setOrder] = useState('ASC');
  useEffect(() => {
    dispatch(setSortColNameAction(col));
    dispatch(setSortOrderAction(order));
    dispatch(queryIhsannualprodsAction());
  }, [col, order]);

  return (
    <>
      <Table
        loading={isLoading}
        pagination={paginationOptions}
        rowKey="id"
        dataSource={ihsannualprods.results}
        scroll={{ x: 3000 }}
        onChange={(...e) => {
          if (e[2].order === 'ascend') {
            setCol(e[2].field);
            setOrder('ASC');
          }
          if (e[2].order === 'descend') {
            setCol(e[2].field);
            setOrder('DESC');
          }
        }}
      >
        <Table.Column
          title=""
          width={80}
          dataIndex="id"
          key="action"
          align="center"
          render={(_, { id }) => (
            <>
              {checkPermissionForComponent(user.role, EditRoutePermission) ? (
                <ToolTipButtonWrapper
                  title={commonMessages.editLabel}
                  clickEvent={() => onEdit(id)}
                >
                  <EditOutlined style={{ marginLeft: '-20px' }} />
                </ToolTipButtonWrapper>
              ) : null}

              {checkPermissionForComponent(user.role, EditRoutePermission) ? (
                <Dropdown overlay={() => listMenu(id)} trigger={['click']}>
                  <NavLink
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    style={{ fontSize: '22px' }}
                  >
                    <Space>...</Space>
                  </NavLink>
                </Dropdown>
              ) : null}
            </>
          )}
        />

        <Table.Column
          title={intl.formatMessage(messages.idLabel)}
          dataIndex="id"
          width={'100'}
          render={(_, { id }) => id}
        />

        <Table.Column
          title={intl.formatMessage(messages.entityLabel)}
          dataIndex="entity"
          width="180"
          render={(_, { entity }) => entity}
          sorter={(a, b) =>
            a.entity.toLowerCase().localeCompare(b.entity.toLowerCase())
          }
        />
        <Table.Column
          title={intl.formatMessage(messages.sourceLabel)}
          dataIndex="source"
          key="source"
          width={'180'}
        />
        <Table.Column
          title={intl.formatMessage(messages.entity_typeLabel)}
          dataIndex="entity_type"
          key="entity_type"
          width="180"
          sorter={(a, b) =>
            a.entity_type
              .toLowerCase()
              .localeCompare(b.entity_type.toLowerCase())
          }
        />
        <Table.Column
          title={intl.formatMessage(messages.primary_productLabel)}
          dataIndex="primary_product"
          key="primary_product"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.lease_nameLabel)}
          dataIndex="lease_name"
          key="lease_name"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.well_numLabel)}
          dataIndex="well_num"
          key="well_num"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.apiLabel)}
          dataIndex="api"
          key="api"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.regulatory_apiLabel)}
          dataIndex="regulatory_api"
          key="regulatory_api"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.year_valLabel)}
          dataIndex="year_val"
          key="year_val"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.annual_liquidLabel)}
          dataIndex="annual_liquid"
          key="annual_liquid"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.annual_gasLabel)}
          dataIndex="annual_gas"
          key="annual_gas"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.annual_waterLabel)}
          dataIndex="annual_water"
          key="annual_water"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.prior_cum_liquidLabel)}
          dataIndex="prior_cum_liquid"
          key="prior_cum_liquid"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.prior_cum_gasLabel)}
          dataIndex="prior_cum_gas"
          key="prior_cum_gas"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.prior_cum_waterLabel)}
          dataIndex="prior_cum_water"
          key="prior_cum_water"
          width={180}
        />
        <Table.Column
          title={intl.formatMessage(messages.rec_statusLabel)}
          dataIndex="rec_status"
          key="rec_status"
          render={(_, { rec_status }) => (
            <Tag color={getStatusClass(rec_status)}>{rec_status}</Tag>
          )}
          width={100}
        />
        <Table.Column
          title={intl.formatMessage(messages.dateLabel)}
          dataIndex="createdAt"
          key="createdAt"
          render={(_, { createdAt }) => (
            <FormattedMessage
              {...messages.createdAt}
              values={{ ts: Date.parse(createdAt) }}
            />
          )}
          width={100}
        />
      </Table>
    </>
  );
}

IhsannualprodTable.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default IhsannualprodTable;
