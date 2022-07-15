import React, { useEffect } from 'react';
import { Modal } from 'antd';
import useGetIHSWellOneLinerForm from 'containers/Ihsannualprods/hooks/useGetIHSWellOneLinerForm';
import { useIntl } from 'react-intl';
import messages from 'containers/IHSWellOneLiner/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  submitFormAction,
} from 'containers/IHSWellOneLiner/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeInitialValuesSelector,
  makeRolesListSelector,
} from 'containers/IHSWellOneLiner/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  initialValues: makeInitialValuesSelector(),
});

const EditIHSWellOneLinerModal = ({ onCancel, visible }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField, initialValues } =
    useSelector(stateSelector);

  const {
    Form,
    form,
    UwiInput,
    SourceInput,
    ApiNumberInput,
    IcNumberInput,
    RegulatoryApiInput,
    OperatorNameInput,
    OperatorCityInput,
    CurrentOperatorNameInput,
    CurrentOperatorCityInput,
    LeaseNameInput,
    AlternateWellNameInputInput,
    WellNumInput,
    FieldNameInput,
    CountryNameInput,
    StateNameInput,
    CountyNameInput,
    OsIndicatorInput,
    HoleDirectionInput,
    FinalStatusInput,
    CurrentStatusInput,
    RegulatoryStatusInput,
    RegulatoryStatusDateInput,
    BasinInput,
    BasinCodeInput,
    SubBasinInput,
    SubBasinCodeInput,
    PlayNameInput,
    PlayTypeInput,
    PermitNumberInput,
    PermitDateInput,
    PermitStatusInput,
    PermitReissueDateInput,
    LeaseAcresInput,
    UnitOfMeasureInput,
    DepthTotalDrillerInput,
    DepthTotalLoggerInput,
    DepthTrueVerticalInput,
    DepthWhipstockInput,
    ClassInitialNameInput,
    ClassInitialCodeInput,
    ClassFinalNameInput,
    ClassFinalCodeInput,
    StatusFinalCodeInput,
    FormationProjectedNameInput,
    DepthTotalProjectedInput,
    FormationAtTdNameInput,
    ProdfitFormationAtTdNameInput,
    FormationProducingNameInput,
    ProdfitTopFormProdNameInput,
    ProdfitBaseFormProdNameInput,
    Prodfit80DegreeHeelPtFormInput,
    ElevationReferenceValueInput,
    ElevationReferenceDatumInput,
    GroundElevationInput,
    ElevationDfInput,
    DateFirstSpudInput,
    DateSpudInput,
    DateCompletionInput,
    DateRigReleaseInput,
    DateAbandonmentInput,
    DateFirstReportInput,
    DateLastActivityInput,
    ProdfitUpdateDateInput,
    DepthWaterValueInput,
    DepthWaterDatumInput,
    SurfaceLatitudeInput,
    SurfaceLongitudeInput,
    SurfaceLlSourceInput,
    ProposedBhLatitudeInput,
    ProposedBhLongitudeInput,
    ProposedBhLlSourceInput,
    BhLatitudeInput,
    BhLongitudeInput,
    BhLlSourceInput,
    ActivityCodeInput,
    PermitFilerLongInput,
    PermitPhoneInput,
    RecStatusInput,
  } = useGetIHSWellOneLinerForm({
    formName: 'edit-IHSWellOneLiner',
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
        <UwiInput />
        <SourceInput />
        <ApiNumberInput />
        <IcNumberInput />
        <RegulatoryApiInput />
        <OperatorNameInput />
        <OperatorCityInput />
        <CurrentOperatorNameInput />
        <CurrentOperatorCityInput />
        <LeaseNameInput />
        <AlternateWellNameInputInput />
        <WellNumInput />
        <FieldNameInput />
        <CountryNameInput />
        <StateNameInput />
        <CountyNameInput />
        <OsIndicatorInput />
        <HoleDirectionInput />
        <FinalStatusInput />
        <CurrentStatusInput />
        <RegulatoryStatusInput />
        <RegulatoryStatusDateInput />
        <BasinInput />
        <BasinCodeInput />
        <SubBasinInput />
        <SubBasinCodeInput />
        <PlayNameInput />
        <PlayTypeInput />
        <PermitNumberInput />
        <PermitDateInput />
        <PermitStatusInput />
        <PermitReissueDateInput />
        <LeaseAcresInput />
        <UnitOfMeasureInput />
        <DepthTotalDrillerInput />
        <DepthTotalLoggerInput />
        <DepthTrueVerticalInput />
        <DepthWhipstockInput />
        <ClassInitialNameInput />
        <ClassInitialCodeInput />
        <ClassFinalNameInput />
        <ClassFinalCodeInput />
        <StatusFinalCodeInput />
        <FormationProjectedNameInput />
        <DepthTotalProjectedInput />
        <FormationAtTdNameInput />
        <ProdfitFormationAtTdNameInput />
        <FormationProducingNameInput />
        <ProdfitTopFormProdNameInput />
        <ProdfitBaseFormProdNameInput />
        <Prodfit80DegreeHeelPtFormInput />
        <ElevationReferenceValueInput />
        <ElevationReferenceDatumInput />
        <GroundElevationInput />
        <ElevationDfInput />
        <DateFirstSpudInput />
        <DateSpudInput />
        <DateCompletionInput />
        <DateRigReleaseInput />
        <DateAbandonmentInput />
        <DateFirstReportInput />
        <DateLastActivityInput />
        <ProdfitUpdateDateInput />
        <DepthWaterValueInput />
        <DepthWaterDatumInput />
        <SurfaceLatitudeInput />
        <SurfaceLongitudeInput />
        <SurfaceLlSourceInput />
        <ProposedBhLatitudeInput />
        <ProposedBhLongitudeInput />
        <ProposedBhLlSourceInput />
        <BhLatitudeInput />
        <BhLongitudeInput />
        <BhLlSourceInput />
        <ActivityCodeInput />
        <PermitFilerLongInput />
        <PermitPhoneInput />
        <RecStatusInput />
      </Form>
    </Modal>
  );
};

EditIHSWellOneLinerModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default EditIHSWellOneLinerModal;
