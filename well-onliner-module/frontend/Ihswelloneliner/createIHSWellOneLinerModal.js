import React, { useEffect } from 'react';
import { Drawer, Space, Button } from 'antd';
import useGetIHSWellOneLinerForm from 'containers/Ihswelloneliner/hooks/useGetIHSWellOneLinerForm';
import { useIntl } from 'react-intl';
import messages from 'containers/Ihswelloneliner/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  submitFormAction,
} from 'containers/Ihswelloneliner/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
} from 'containers/Ihswelloneliner/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';
import moment from 'moment';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
  initialValues: makeInitialValuesSelector(),
});
const CreateIHSWellOneLinerModal = ({ onCancel, visible }) => {
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
    formName: 'create-IHSWellOneLiner',
    device,
    initialValues,
  });

  const onSubmitCreateForm = async () => {
    await form.validateFields();
    const wellForm = form.getFieldsValue();

    const {
      regulatory_status_date,
      prodfit_update_date,
      permit_reissue_date,
      permit_date,
      date_spud,
      date_rig_release,
      date_last_activity,
      date_first_spud,
      date_first_report,
      date_completion,
      date_abandonment,
      ...rest
    } = wellForm;
    const rst = moment(regulatory_status_date).format('YYYY-MM-DD');
    const pud = moment(prodfit_update_date).format('YYYY-MM-DD');
    const prd = moment(permit_reissue_date).format('YYYY-MM-DD');
    const pd = moment(permit_date).format('YYYY-MM-DD');
    const ds = moment(date_spud).format('YYYY-MM-DD');
    const drr = moment(date_rig_release).format('YYYY-MM-DD');
    const dla = moment(date_last_activity).format('YYYY-MM-DD');
    const dfs = moment(date_first_spud).format('YYYY-MM-DD');
    const dfr = moment(date_first_report).format('YYYY-MM-DD');
    const dc = moment(date_completion).format('YYYY-MM-DD');
    const da = moment(date_abandonment).format('YYYY-MM-DD');
    console.log(moment(wellForm.regulatory_status_date).format('YYYY-MM-DD'));
    const wellFormDateValues = {
      ...wellForm,
      regulatory_status_date: rst,
      prodfit_update_date: pud,
      permit_reissue_date: prd,
      permit_date: pd,
      date_spud: ds,
      date_rig_release: drr,
      date_last_activity: dla,
      date_first_spud: dfs,
      date_first_report: dfr,
      date_completion: dc,
      date_abandonment: da,
    };
    dispatch(setFormValues(wellFormDateValues));
    dispatch(submitFormAction());
    console.log(setFormValues(wellFormDateValues));
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
    <Drawer
      title={intl.formatMessage(messages.addTitle)}
      visible={visible}
      onClose={onCancelModal}
      width={1000}
      extra={
        <Space>
          <Button onClick={onCancel}>
            {intl.formatMessage(commonMessage.cancel)}
          </Button>
          <Button onClick={onSubmitCreateForm} type="primary">
            {intl.formatMessage(commonMessage.okLabel)}
          </Button>
        </Space>
      }
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
    </Drawer>
  );
};

CreateIHSWellOneLinerModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default CreateIHSWellOneLinerModal;
