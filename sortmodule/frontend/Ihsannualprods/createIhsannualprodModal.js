import React, { useEffect } from 'react';
import { Drawer, Space, Button } from 'antd';
import useGetIhsannualprodForm from 'containers/Ihsannualprods/hooks/useGetIhsannualprodForm';
import { useIntl } from 'react-intl';
import messages from 'containers/Ihsannualprods/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  submitFormAction,
} from 'containers/Ihsannualprods/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
} from 'containers/Ihsannualprods/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
  initialValues: makeInitialValuesSelector(),
});

const CreateIhsannualprodModal = ({ onClose, visible }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField, initialValues } = useSelector(stateSelector);

  const {
    Form,
    form,
    EntityInput,
    SourceInput,
    EntityTypeInput,
    PrimaryProductInput,
    LeaseNameInput,
	WellNumInput,
	ApiInput,
	RegulatoryApiInput,
	YearValInput,
	AnnualLiquidInput,
	AnnualGasInput,
	AnnualWaterInput,
	PriorCumLiquidInput,
	PriorCumGasInput,
	PriorCumWaterInput,
	RecStatusInput
  } = useGetIhsannualprodForm({
    formName: 'create-ihsannualprod',
    device,
	initialValues,
  });

  const onSubmitCreateForm = async () => {
    await form.validateFields();
    dispatch(setFormValues(form.getFieldsValue()));
    dispatch(submitFormAction());
  };

  const onCancelModal = () => {
    onClose();
    form.resetFields();
  };

  useEffect(() => {
    if (clearFormField) {
      dispatch(clearFormAction());
      if (form) {
        form.resetFields();
      }
      onClose();
    }
  }, [clearFormField]);

  useEffect(() => {
    if (errors?.length) {
      form.setFields(errors);
    }
  }, [errors]);

  return (
    <Drawer
      title={intl.formatMessage(messages.addTitle)}
      visible={visible}
	  onClose={onCancelModal}
	  width={1000}
	  extra={
		<Space>
            <Button onClick={onClose}>{intl.formatMessage(commonMessage.cancel)}</Button>
            <Button onClick={onSubmitCreateForm} type="primary">
              {intl.formatMessage(commonMessage.okLabel)}
            </Button>
          </Space>
        }
    >
      <Form>
        <EntityInput />
        <SourceInput />
        <EntityTypeInput />
        <PrimaryProductInput />
        <LeaseNameInput />
		<WellNumInput />
		<ApiInput />
		<RegulatoryApiInput />
		<YearValInput />
		<AnnualLiquidInput />
		<AnnualGasInput />
		<AnnualWaterInput />
		<PriorCumLiquidInput />
		<PriorCumGasInput />
		<PriorCumWaterInput />
		<RecStatusInput />
      </Form>
    </Drawer>
  );
};

CreateIhsannualprodModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default CreateIhsannualprodModal;
