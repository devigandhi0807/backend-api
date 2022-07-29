import React, { useEffect } from 'react';
import { Modal, Space, Button, Drawer } from 'antd';
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
  makeRolesListSelector,
} from 'containers/Ihsannualprods/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  initialValues: makeInitialValuesSelector(),
});

const EditIhsannualprodModal = ({ onClose, visible }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField, initialValues } =
    useSelector(stateSelector);

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

  const onSubmitEditForm = async () => {
    await form.validateFields();
	var formFileds = form.getFieldsValue();
	formFileds.year_val = (formFileds.year_val) ? Number(formFileds.year_val) : '';	
	formFileds.annual_liquid = (formFileds.annual_liquid) ? Number(formFileds.annual_liquid) : '';
	formFileds.annual_gas = (formFileds.annual_gas) ? Number(formFileds.annual_gas) : '';
	formFileds.annual_water = (formFileds.annual_water) ? Number(formFileds.annual_water) : '';
	formFileds.prior_cum_liquid = (formFileds.prior_cum_liquid) ? Number(formFileds.prior_cum_liquid) : '';
	formFileds.prior_cum_gas = (formFileds.prior_cum_gas) ? Number(formFileds.prior_cum_gas) : '';
	formFileds.prior_cum_water = (formFileds.prior_cum_water) ? Number(formFileds.prior_cum_water) : '';
    dispatch(setFormValues(formFileds));
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

  useEffect(() => visible && form.resetFields(), [initialValues]);

  return (
    <Drawer
      title={intl.formatMessage(messages.editTitle) + ' #' +initialValues.id}
      visible={visible}
      onClose={onCancelModal}
	  width={1000}
	  extra={
          <Space>
            <Button onClick={onCancelModal}>{intl.formatMessage(commonMessage.cancel)}</Button>
            <Button onClick={onSubmitEditForm} type="primary">
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

EditIhsannualprodModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default EditIhsannualprodModal;
