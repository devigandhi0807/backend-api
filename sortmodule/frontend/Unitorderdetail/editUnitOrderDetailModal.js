import React, { useEffect } from 'react';
import { Modal } from 'antd';
import useGetUnitOrderDetailForm from 'containers/Unitorderdetail/hooks/useGetUnitOrderDetailForm';
import { useIntl } from 'react-intl';
import messages from 'containers/Unitorderdetail/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  submitFormAction,
} from 'containers/Unitorderdetail/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeInitialValuesSelector,
} from 'containers/Unitorderdetail/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  initialValues: makeInitialValuesSelector(),
});

function EditUnitOrderDetailModal({ onCancel, visible }) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField, initialValues } =
    useSelector(stateSelector);

  const {
    Form,
    form,
    TractNoInput,
    InterestTypeInput,
    GrossAreaInAcresInput,
    NetAreaInAcresInput,
    PctOfUnitInput,
    OwnershipDisplayNameInput,
    CurNotesInput,
    RecStatusInput,
  } = useGetUnitOrderDetailForm({
    formName: 'edit-unitorderdetail',
    device,
    initialValues,
  });

  const onSubmitEditForm = async () => {
    await form.validateFields();
    dispatch(setFormValues(form.getFieldsValue()));
    dispatch(submitFormAction());
  };

  const onCancelModal = () => {
    onCancel();
    form.resetFields();
  };

  useEffect(() => {
    if (clearFormField) {
      dispatch(clearFormAction());
      if (form) {
        form.resetFields();
      }
      onCancel();
    }
  }, [clearFormField]);

  useEffect(() => {
    if (errors?.length) {
      form.setFields(errors);
    }
  }, [errors]);

  useEffect(() => visible && form.resetFields(), [initialValues]);

  return (
    <Modal
      title={intl.formatMessage(messages.editTitle)}
      visible={visible}
      onOk={onSubmitEditForm}
      onCancel={onCancelModal}
      okText={intl.formatMessage(commonMessage.okLabel)}
      cancelText={intl.formatMessage(commonMessage.cancel)}
      width={800}
    >
      <Form>
        <TractNoInput />
        <GrossAreaInAcresInput />
        <NetAreaInAcresInput />
        <PctOfUnitInput />
        <InterestTypeInput />
        <OwnershipDisplayNameInput />
        <CurNotesInput />
        <RecStatusInput />
      </Form>
    </Modal>
  );
}

EditUnitOrderDetailModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default EditUnitOrderDetailModal;
