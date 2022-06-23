import React, { useEffect } from 'react';
import { Modal } from 'antd';
import useGetUnitOrderDetailForm from 'containers/UnitOrderDetail/hooks/useGetUnitOrderDetailForm';
import { useIntl } from 'react-intl';
import messages from 'containers/UnitOrderDetail/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  setuoIdAction,
  submitFormAction,
} from 'containers/UnitOrderDetail/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
  makeuoIdSelector,
} from 'containers/UnitOrderDetail/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';
import { useParams } from 'react-router-dom';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
  uoPId: makeuoIdSelector(),
});

function CreateUnitOrderDetailModal({ onCancel, visible }) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField, uoPId } = useSelector(stateSelector);
  const { uoId = uoPId } = useParams();

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
    formName: 'create-unitorderdetail',
    device,
  });

  const onSubmitCreateForm = async () => {
    await form.validateFields();
    dispatch(setuoIdAction(uoId));
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

  return (
    <Modal
      title={intl.formatMessage(messages.addTitle)}
      visible={visible}
      onOk={onSubmitCreateForm}
      onCancel={onCancelModal}
      okText={intl.formatMessage(commonMessage.okLabel)}
      cancelText={intl.formatMessage(commonMessage.cancel)}
      width={800}
    >
      <Form>
        <TractNoInput />
        <InterestTypeInput />
        <GrossAreaInAcresInput />
        <NetAreaInAcresInput />
        <PctOfUnitInput />
        <OwnershipDisplayNameInput />
        <CurNotesInput />
        <RecStatusInput />
      </Form>
    </Modal>
  );
}

CreateUnitOrderDetailModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default CreateUnitOrderDetailModal;
