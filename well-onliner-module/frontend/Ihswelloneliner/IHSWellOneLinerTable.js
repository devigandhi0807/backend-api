import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from 'containers/Ihswelloneliner/messages';
import commonMessages from 'common/messages';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPageNumberAction,
  setPageSizeAction,
} from 'containers/Ihswelloneliner/actions';
import { Table, Tag, Modal, Menu, Dropdown, Space } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  makeIsLoadingSelector,
  makeIHSWellOneLinersSelector,
} from 'containers/Ihswelloneliner/selectors';
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

const stateSelector = createStructuredSelector({
  isLoading: makeIsLoadingSelector(),
  ihswelloneliners: makeIHSWellOneLinersSelector(),
  user: makeLoggedInUserSelector(),
});

const EditRoutePermission = {
  resource: 'IHSWellOneLiner',
  method: PUT,
  path: '/ihs-well-one-liner/:id',
};

const DeleteRoutePermission = {
  resource: 'IHSWellOneLiner',
  method: DELETE,
  path: '/ihs-well-one-liner/:id',
};

function IHSWellOneLinerTable(props) {
  const { onEdit, onDelete, onView } = props;
  const { ihswelloneliners, user, isLoading } = useSelector(stateSelector);
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
    total: ihswelloneliners.totalItems,
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
      <Menu.Item key={'oneliner-view-' + id}>
        <ToolTipButtonWrapper
          placement="right"
          title={commonMessages.viewLabel}
          clickEvent={() => onView(id)}
        >
          <EyeOutlined />
        </ToolTipButtonWrapper>
      </Menu.Item>
      {checkPermissionForComponent(user.role, DeleteRoutePermission) ? (
        <>
          <Menu.Divider />
          <Menu.Item key={'oneliner-remove-' + id}>
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
        </>
      ) : null}
    </Menu>
  );
  return (
    <Table
      loading={isLoading}
      pagination={paginationOptions}
      rowKey="id"
      dataSource={ihswelloneliners.results}
      scroll={{ x: 3000 }}
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

            <Dropdown overlay={() => listMenu(id)} trigger={['click']}>
              <NavLink
                to="#"
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: '22px' }}
              >
                <Space>...</Space>
              </NavLink>
            </Dropdown>
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
        title={intl.formatMessage(messages.sourceLabel)}
        dataIndex="source"
        key="source"
        width={'180'}
      />
      <Table.Column
        title={intl.formatMessage(messages.api_numberLabel)}
        dataIndex="api_number"
        key="api_number"
        width={'180'}
      />

      <Table.Column
        title={intl.formatMessage(messages.operator_nameLabel)}
        dataIndex="operator_name"
        key="operator_name"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.current_operator_cityLabel)}
        dataIndex="current_operator_city"
        key="current_operator_city"
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
        title={intl.formatMessage(messages.state_nameLabel)}
        dataIndex="state_name"
        key="state_name"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.basin_codeLabel)}
        dataIndex="basin_code"
        key="basin_code"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.sub_basinLabel)}
        dataIndex="sub_basin"
        key="sub_basin"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.sub_basin_codeLabel)}
        dataIndex="sub_basin_code"
        key="sub_basin_code"
        width={180}
      />

      <Table.Column
        title={intl.formatMessage(messages.permit_numberLabel)}
        dataIndex="permit_number"
        key="permit_number"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.permit_dateLabel)}
        dataIndex="permit_date"
        key="permit_date"
        render={(_, { permit_date }) => (
          <FormattedMessage
            {...messages.permit_date}
            values={{ ts: Date.parse(permit_date) }}
          />
        )}
        width={180}
      />

      <Table.Column
        title={intl.formatMessage(messages.permit_statusLabel)}
        dataIndex="permit_status"
        key="permit_status"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.permit_reissue_dateLabel)}
        dataIndex="permit_reissue_date"
        key="permit_reissue_date"
        render={(_, { permit_reissue_date }) => (
          <FormattedMessage
            {...messages.permit_reissue_date}
            values={{ ts: Date.parse(permit_reissue_date) }}
          />
        )}
        width={180}
      />

      <Table.Column
        title={intl.formatMessage(messages.lease_acresLabel)}
        dataIndex="lease_acres"
        key="lease_acres"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.unit_of_measureLabel)}
        dataIndex="unit_of_measure"
        key="unit_of_measure"
        width={180}
      />

      <Table.Column
        title={intl.formatMessage(messages.depth_total_drillerLabel)}
        dataIndex="depth_total_driller"
        key="depth_total_driller"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.depth_total_loggerLabel)}
        dataIndex="depth_total_logger"
        key="depth_total_logger"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.depth_true_verticalLabel)}
        dataIndex="depth_true_vertical"
        key="depth_true_vertical"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.depth_whipstockLabel)}
        dataIndex="depth_whipstock"
        key="depth_whipstock"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.class_initial_nameLabel)}
        dataIndex="class_initial_name"
        key="class_initial_name"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.class_initial_codeLabel)}
        dataIndex="class_initial_code"
        key="class_initial_code"
        width={180}
      />

      <Table.Column
        title={intl.formatMessage(messages.class_final_nameLabel)}
        dataIndex="class_final_name"
        key="class_final_name"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.surface_ll_sourceLabel)}
        dataIndex="surface_ll_source"
        key="surface_ll_source"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.proposed_bh_latitudeLabel)}
        dataIndex="proposed_bh_latitude"
        key="proposed_bh_latitude"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.proposed_bh_longitudeLabel)}
        dataIndex="proposed_bh_longitude"
        key="proposed_bh_longitude"
        width={180}
      />
      <Table.Column
        title={intl.formatMessage(messages.proposed_bh_ll_sourceLabel)}
        dataIndex="proposed_bh_ll_source"
        key="proposed_bh_ll_source"
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
  );
}

IHSWellOneLinerTable.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default IHSWellOneLinerTable;
