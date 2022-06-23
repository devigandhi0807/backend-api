import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from 'containers/UnitOrderDetail/messages';
import commonMessages from 'common/messages';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPageNumberAction,
  setPageSizeAction,
} from 'containers/UnitOrderDetail/actions';
import { Table, Tag, Modal, Menu, Dropdown, Space } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  makeIsLoadingSelector,
  makeUnitOrderDetailsSelector,
} from 'containers/UnitOrderDetail/selectors';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { checkPermissionForComponent } from 'utils/permission';
import PropTypes from 'prop-types';
import { PUT } from 'utils/constants';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import ToolTipButtonWrapper from 'components/ToolTipButtonWrapper';

const stateSelector = createStructuredSelector({
  isLoading: makeIsLoadingSelector(),
  unitorderdetails: makeUnitOrderDetailsSelector(),
  user: makeLoggedInUserSelector(),
});

const EditRoutePermission = {
  resource: 'unitOrderDetail',
  method: PUT,
  path: '/:uoId/unit-order-detail/:id',
};

// const DeleteRoutePermission = {
//   resource: 'unitOrderDetail',
//   method: DELETE,
//   path: '/:id/unit-order-detail/:id',
// };

function UnitOrderDetailTable(props) {
  const { onEdit, onDelete, onView } = props;
  const { unitorderdetails, user, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const intl = useIntl();

  // const paginationOptions = {
  //   showSizeChanger: true,
  //   showQuickJumper: true,
  //   onShowSizeChange: (_, pageSize) => {
  //     dispatch(setPageSizeAction(pageSize));
  //   },
  //   onChange: (page) => {
  //     dispatch(setPageNumberAction(page));
  //   },
  //   pageSizeOptions: [5, 10, 20, 30, 50, 100],
  //   total: unitorderdetails.totalItems,
  //   showTotal: (total, range) => (
  //     <FormattedMessage
  //       {...commonMessages.pagination}
  //       values={{ start: range[0], end: range[1], total }}
  //     />
  //   ),
  // };

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
      <Menu.Item key={Math.random() * id}>
        <ToolTipButtonWrapper
          placement="right"
          title={commonMessages.viewLabel}
          clickEvent={() => onView(id)}
        >
          <EyeOutlined />
        </ToolTipButtonWrapper>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={Math.random() * id}>
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

  return (
    <Table
      loading={isLoading}
      rowKey="id"
      dataSource={unitorderdetails.results}
      scroll={{ x: 1800 }}
    >
      <Table.Column
        title={intl.formatMessage(messages.idLabel)}
        dataIndex="id"
        width={50}
        render={(_, { id }) => id}
      />

      <Table.Column
        title={intl.formatMessage(messages.actionLabel)}
        width={100}
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
                <EditOutlined />
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
        title={intl.formatMessage(messages.tract_noLabel)}
        dataIndex="tract_no"
        width={180}
        // eslint-disable-next-line camelcase
        render={(_, { tract_no }) => tract_no}
      />
      <Table.Column
        title={intl.formatMessage(messages.gross_area_in_acresLabel)}
        dataIndex="gross_area_in_acres"
        key="gross_area_in_acres"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.net_area_in_acresLabel)}
        dataIndex="net_area_in_acres"
        key="net_area_in_acres"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.pct_of_unitLabel)}
        dataIndex="pct_of_unit"
        key="pct_of_unit"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.interest_typeLabel)}
        dataIndex="interest_type"
        key="interest_type"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.ownership_display_nameLabel)}
        dataIndex="owenership_display_name"
        key="owenership_display_name"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.cur_notesLabel)}
        dataIndex="cur_notes"
        key="cur_notes"
        width={180}
      />

      <Table.Column
        // @ts-ignore
        title={intl.formatMessage(messages.rec_statusLabel)}
        dataIndex="rec_status"
        key="rec_status"
        // eslint-disable-next-line camelcase
        render={(_, { rec_status }) => (
          // eslint-disable-next-line camelcase
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
  );
}

UnitOrderDetailTable.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default UnitOrderDetailTable;
