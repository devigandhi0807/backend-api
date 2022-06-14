import React, { useEffect } from 'react';
import { Modal, Card } from 'antd';
import { createStructuredSelector } from 'reselect';
import { useIntl } from 'react-intl';
import messages from 'containers/Users/messages';
import PropTypes from 'prop-types';
import { queryUsersAction } from 'containers/Users/actions';
import { useDispatch, useSelector } from 'react-redux';
import commonMessage from 'common/messages';
import {
  makeUserSelector,
  makeIsLoadingSelector,
  makeRolesListSelector,
} from 'containers/Users/selectors';

const stateSelector = createStructuredSelector({
  viewUser: makeUserSelector(),
  isLoading: makeIsLoadingSelector(),
  roles: makeRolesListSelector(),
});
function ViewUserModal({ onCancel, visible }) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { viewUser, isLoading, roles } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(queryUsersAction());
  }, []);

  useEffect(() => visible, []);
  const onCancelModal = () => {
    onCancel();
  };
  return (
    <Modal
      title={intl.formatMessage(messages.viewTitle)}
      visible={visible}
      onOk={onCancelModal}
      okText={intl.formatMessage(commonMessage.okLabel)}
      onCancel={onCancelModal}
      cancelText={intl.formatMessage(commonMessage.cancel)}
    >
      <Card
        loading={isLoading}
        title={<b>{viewUser.name} Contact Details</b>}
        className="card-contibution"
        cover={
          viewUser.avatar && (
            <img
              alt={viewUser.name}
              src={`https://www.gravatar.com/avatar/${viewUser.avatar}?s=250&d=blank`}
            />
          )
        }
      >
        <div className="card-inner">
          <p>
            <b>Name: {viewUser.name}</b>
          </p>
          <p>
            <b>User Name: {viewUser.username}</b>
          </p>
          <p>
            <b>Email: {viewUser.email}</b>
          </p>
          <p>
            {viewUser.role &&
              roles.map(
                (role) =>
                  role.id === viewUser.role.id && <b>Role: {role.name}</b>,
              )}
          </p>
          <p>
            <b>Status: {viewUser.status}</b>
          </p>
          <p>
            <b>Contact: {viewUser.contact}</b>
          </p>
          <p>
            <b>Address: {viewUser.address}</b>
          </p>
        </div>
      </Card>
    </Modal>
  );
}

ViewUserModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default ViewUserModal;
