import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from 'containers/Unitorderdetail/messages';
import commonMessages from 'common/messages';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPageNumberAction,
  setPageSizeAction,
} from 'containers/Unitorderdetail/actions';
import { Table, Tag, Modal, Menu, Dropdown, Space } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  makeIsLoadingSelector,
  makeUnitOrderDetailSelector,
} from 'containers/Unitorderdetail/selectors';
import { makeLoggedInUserSelector } from 'containers/App/selectors';
import { checkPermissionForComponent } from 'utils/permission';
import PropTypes from 'prop-types';
import { DELETE, PUT } from 'utils/constants';
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
  unitorderdetail: makeUnitOrderDetailSelector(),
  user: makeLoggedInUserSelector(),
});

const EditRoutePermission = {
  resource: 'unitOrderDetail',
  method: PUT,
  path: '/:uoId/unit-order-detail/:id',
};

const DeleteRoutePermission = {
  resource: 'unitOrderDetail',
  method: DELETE,
  path: '/:uoId/unit-order-detail/:id',
};

function UnitOrderDetailTable(props) {
  const { onEdit, onDelete, onView } = props;
  const { unitorderdetail, user, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const intl = useIntl();
  console.log(unitorderdetail);
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
      <Menu.Item key={'uod-view-' + id}>
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
          <Menu.Item key={'uod-remove-' + id}>
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
    <ul>
      {unitorderdetail.map((item) => {
        return <li>{item[0].tract_no}</li>;
      })}
    </ul>
  );
}

UnitOrderDetailTable.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default UnitOrderDetailTable;
