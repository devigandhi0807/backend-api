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
    formName: 'Edit-IHSWellOneLiner',
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
      lease_acres,
      depth_total_driller,
      depth_total_logger,
      depth_true_vertical,
      depth_whipstock,
      depth_total_projected,
      depth_water_value,
      formation_at_td_name,
      elevation_reference_value,
      ground_elevation,
      elevation_df,
      surface_latitude,
      surface_longitude,
      proposed_bh_latitude,
      proposed_bh_longitude,
      bh_latitude,
      bh_longitude,
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

    const la = lease_acres ? Number(lease_acres) : '';
    const dtd = depth_total_driller ? Number(depth_total_driller) : '';
    const dtl = depth_total_logger ? Number(depth_total_logger) : '';
    const dtv = depth_true_vertical ? Number(depth_true_vertical) : '';
    const dw = depth_whipstock ? Number(depth_whipstock) : '';
    const dtp = depth_total_projected ? Number(depth_total_projected) : '';
    const dwv = depth_water_value ? Number(depth_water_value) : '';
    const fatn = formation_at_td_name ? Number(formation_at_td_name) : '';

    const erv = elevation_reference_value
      ? Number(elevation_reference_value)
      : '';
    const ge = ground_elevation ? Number(ground_elevation) : '';
    const ed = elevation_df ? Number(elevation_df) : '';
    const sl = surface_latitude ? Number(surface_latitude) : '';
    const slg = surface_longitude ? Number(surface_longitude) : '';
    const pbl = proposed_bh_latitude ? Number(proposed_bh_latitude) : '';
    const pblg = proposed_bh_longitude ? Number(proposed_bh_longitude) : '';
    const bl = bh_latitude ? Number(bh_latitude) : '';
    const blg = bh_longitude ? Number(bh_longitude) : '';

    const wellFormValues = {
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
      lease_acres: la,
      depth_total_driller: dtd,
      depth_total_logger: dtl,
      depth_true_vertical: dtv,
      depth_whipstock: dw,
      depth_total_projected: dtp,
      depth_water_value: dwv,
      formation_at_td_name: fatn,
      elevation_reference_value: erv,
      ground_elevation: ge,
      elevation_df: ed,
      surface_latitude: sl,
      surface_longitude: slg,
      proposed_bh_latitude: pbl,
      proposed_bh_longitude: pblg,
      bh_latitude: bl,
      bh_longitude: blg,
    };
    dispatch(setFormValues(wellFormValues));
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
    <Drawer
      title={intl.formatMessage(messages.editTitle) + ' #' + initialValues.id}
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
        {/* <RegulatoryStatusDateInput /> */}
        <BasinInput />
        <BasinCodeInput />
        <SubBasinInput />
        <SubBasinCodeInput />
        <PlayNameInput />
        <PlayTypeInput />
        <PermitNumberInput />
        {/* <PermitDateInput /> */}
        <PermitStatusInput />
        {/* <PermitReissueDateInput /> */}
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
        {/* <DateFirstSpudInput />
        <DateSpudInput /> *
         <DateCompletionInput />
        <DateRigReleaseInput />
        <DateAbandonmentInput />
        <DateFirstReportInput />
        <DateLastActivityInput />
        <ProdfitUpdateDateInput />*/}
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

EditIHSWellOneLinerModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default EditIHSWellOneLinerModal;
