import React from 'react';
import { Col, Form, Select } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/IHSWellOneLiner/messages';
import { FormattedMessage } from 'react-intl';
import SelectInputWrapper from 'components/SelectInputWrapper';
import FormInputWrapper from 'components/FormInputWrapper';
import { rules } from 'common/rules';

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};

const wrapperCol = {
  xs: {
    span: 24,
    offset: 0,
  },
  sm: {
    span: 24,
    offset: 0,
  },
  md: {
    span: 10,
    offset: 1,
  },
  lg: {
    span: 10,
    offset: 1,
  },
  xl: {
    span: 10,
    offset: 1,
  },
  xxl: {
    span: 10,
    offset: 1,
  },
};

const useGetIHSWellOneLinerForm = ({
  responsive = true,
  formName = 'form',
  roles = [],
  initialValues = {},
  device,
}) => {
  const [formInstance] = Form.useForm();

  const WrappedForm = ({ ...props }) => (
    // @ts-ignore
    <FormWrapper
      {...props}
      values={initialValues}
      formInstance={formInstance}
      layout={layout}
      device={device}
      responsive={responsive}
      name={formName}
      classname="form-ant-items"
    />
  );

  WrappedForm.Item = Form.Item;

  const EntityInput = () => {
    const entityInput = (
      <FormInputWrapper
        label={messages.entityLabel}
        name="entity"
        id="entity"
        type="text"
        required
        placeholder={messages.entityPlaceHolder}
      />
    );

    return responsive ? <Col {...wrapperCol}>{entityInput}</Col> : entityInput;
  };

  const UwiInput = () => {
    const uwiInput = (
      <FormInputWrapper
        label={messages.uwiLabel}
        name="uwi"
        id="oneliner_uwi"
        type="text"
        required
        placeholder={messages.uwiPlaceHolder}
      />
    );
    return responsive ? <Col {...wrapperCol}>{uwiInput}</Col> : uwiInput;
  };

  const SourceInput = () => {
    const sourceInput = (
      <FormInputWrapper
        label={messages.sourceLabel}
        name="source"
        id="oneliner_source"
        type="text"
        required
        placeholder={messages.sourcePlaceHolder}
      />
    );
    return responsive ? <Col {...wrapperCol}>{sourceInput}</Col> : sourceInput;
  };

  const ApiNumberInput = () => {
    const apinumberInput = (
      <FormInputWrapper
        label={messages.api_numberLabel}
        name="api_number"
        id="oneliner_api_number"
        type="text"
        required
        placeholder={messages.api_numberPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{apinumberInput}</Col>
    ) : (
      apinumberInput
    );
  };

  const IcNumberInput = () => {
    const icnumberInput = (
      <FormInputWrapper
        label={messages.ic_numberLabel}
        name="ic_number"
        id="oneliner_ic_number"
        type="text"
        required
        placeholder={messages.ic_numberPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{icnumberInput}</Col>
    ) : (
      icnumberInput
    );
  };

  const RegulatoryApiInput = () => {
    const regulatory_apiInput = (
      <FormInputWrapper
        label={messages.regulatory_apiLabel}
        name="regulatory_api"
        id="oneliner_regulatory_api"
        type="text"
        required
        placeholder={messages.regulatory_apiPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{regulatory_apiInput}</Col>
    ) : (
      regulatory_apiInput
    );
  };

  const OperatorNameInput = () => {
    const operatornameInput = (
      <FormInputWrapper
        label={messages.operator_nameLabel}
        name="operator_name"
        id="oneliner_operator_name"
        type="text"
        required
        placeholder={messages.operator_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{operatornameInput}</Col>
    ) : (
      operatornameInput
    );
  };

  const OperatorCityInput = () => {
    const operatorcityInput = (
      <FormInputWrapper
        label={messages.operator_cityLabel}
        name="operator_city"
        id="oneliner_operator_city"
        type="text"
        required
        placeholder={messages.operator_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{operatorcityInput}</Col>
    ) : (
      operatorcityInput
    );
  };

  const CurrentOperatorNameInput = () => {
    const currentoperatornameInput = (
      <FormInputWrapper
        label={messages.current_operator_nameLabel}
        name="current_operator_name"
        id="oneliner_current_operator_name"
        type="text"
        required
        placeholder={messages.current_operator_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{currentoperatornameInput}</Col>
    ) : (
      currentoperatornameInput
    );
  };

  const CurrentOperatorCityInput = () => {
    const currentoperatorcityInput = (
      <FormInputWrapper
        label={messages.current_operator_cityLabel}
        name="current_operator_city"
        id="oneliner_current_operator_city"
        type="text"
        required
        placeholder={messages.current_operator_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{currentoperatorcityInput}</Col>
    ) : (
      currentoperatorcityInput
    );
  };

  const LeaseNameInput = () => {
    const leasenameInput = (
      <FormInputWrapper
        label={messages.lease_nameLabel}
        name="lease_name"
        id="oneliner_lease_name"
        type="text"
        required
        placeholder={messages.lease_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{leasenameInput}</Col>
    ) : (
      leasenameInput
    );
  };

  const AlternateWellNameInputInput = () => {
    const alternatewellnameInput = (
      <FormInputWrapper
        label={messages.alternate_well_nameLabel}
        name="alternate_well_name"
        id="oneliner_alternate_well_name"
        type="text"
        required
        placeholder={messages.alternate_well_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{alternatewellnameInput}</Col>
    ) : (
      alternatewellnameInput
    );
  };

  const WellNumInput = () => {
    const wellnumInput = (
      <FormInputWrapper
        label={messages.well_numLabel}
        name="well_num"
        id="oneliner_well_num"
        type="text"
        required
        placeholder={messages.well_numPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{wellnumInput}</Col>
    ) : (
      wellnumInput
    );
  };

  const FieldNameInput = () => {
    const fieldnameInput = (
      <FormInputWrapper
        label={messages.field_nameLabel}
        name="field_name"
        id="oneliner_field_name"
        type="text"
        required
        placeholder={messages.field_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{fieldnameInput}</Col>
    ) : (
      fieldnameInput
    );
  };

  const CountryNameInput = () => {
    const countrynameInput = (
      <FormInputWrapper
        label={messages.country_nameLabel}
        name="country_name"
        id="oneliner_country_name"
        type="text"
        required
        placeholder={messages.country_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{countrynameInput}</Col>
    ) : (
      countrynameInput
    );
  };

  const StateNameInput = () => {
    const statenameInput = (
      <FormInputWrapper
        label={messages.state_nameLabel}
        name="state_name"
        id="oneliner_state_name"
        type="text"
        required
        placeholder={messages.state_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{statenameInput}</Col>
    ) : (
      statenameInput
    );
  };

  const CountyNameInput = () => {
    const countynameInput = (
      <FormInputWrapper
        label={messages.county_nameLabel}
        name="county_name"
        id="oneliner_county_name"
        type="text"
        required
        placeholder={messages.county_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{countynameInput}</Col>
    ) : (
      countynameInput
    );
  };

  const OsIndicatorInput = () => {
    const osindicatorInput = (
      <FormInputWrapper
        label={messages.os_indicatorLabel}
        name="os_indicator"
        id="oneliner_os_indicator"
        type="text"
        required
        placeholder={messages.os_indicatorPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{osindicatorInput}</Col>
    ) : (
      osindicatorInput
    );
  };

  const HoleDirectionInput = () => {
    const holedirectionInput = (
      <FormInputWrapper
        label={messages.hole_directionLabel}
        name="hole_direction"
        id="oneliner_hole_direction"
        type="text"
        required
        placeholder={messages.hole_directionPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{holedirectionInput}</Col>
    ) : (
      holedirectionInput
    );
  };

  const FinalStatusInput = () => {
    const finalstatusInput = (
      <FormInputWrapper
        label={messages.final_statusLabel}
        name="final_status"
        id="oneliner_final_status"
        type="text"
        required
        placeholder={messages.final_statusPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{finalstatusInput}</Col>
    ) : (
      finalstatusInput
    );
  };

  const CurrentStatusInput = () => {
    const currentstatusInput = (
      <FormInputWrapper
        label={messages.current_statusLabel}
        name="current_status"
        id="oneliner_current_status"
        type="text"
        required
        placeholder={messages.current_statusPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{currentstatusInput}</Col>
    ) : (
      currentstatusInput
    );
  };

  const RegulatoryStatusInput = () => {
    const regulatorystatusInput = (
      <FormInputWrapper
        label={messages.regulatory_statusLabel}
        name="regulatory_status"
        id="oneliner_regulatory_status"
        type="text"
        required
        placeholder={messages.regulatory_statusPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{regulatorystatusInput}</Col>
    ) : (
      regulatorystatusInput
    );
  };

  const RegulatoryStatusDateInput = () => {
    const regulatorystatusdateInput = (
      <FormInputWrapper
        label={messages.regulatory_status_dateLabel}
        name="regulatory_status_date"
        id="oneliner_regulatory_status_date"
        type="date"
        required
        placeholder={messages.regulatory_status_datePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{regulatorystatusdateInput}</Col>
    ) : (
      regulatorystatusdateInput
    );
  };

  const BasinInput = () => {
    const basinInput = (
      <FormInputWrapper
        label={messages.basinLabel}
        name="basin"
        id="oneliner_basin"
        type="text"
        required
        placeholder={messages.basinPlaceHolder}
      />
    );
    return responsive ? <Col {...wrapperCol}>{basinInput}</Col> : basinInput;
  };

  const BasinCodeInput = () => {
    const basincodeInput = (
      <FormInputWrapper
        label={messages.basin_codeLabel}
        name="basin_code"
        id="oneliner_basin_code"
        type="text"
        required
        placeholder={messages.basin_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{basincodeInput}</Col>
    ) : (
      basincodeInput
    );
  };

  const SubBasinInput = () => {
    const subbasinInput = (
      <FormInputWrapper
        label={messages.sub_basinLabel}
        name="sub_basin"
        id="oneliner_sub_basin"
        type="text"
        required
        placeholder={messages.sub_basinPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{subbasinInput}</Col>
    ) : (
      subbasinInput
    );
  };

  const SubBasinCodeInput = () => {
    const subbasincodeInput = (
      <FormInputWrapper
        label={messages.sub_basin_codeLabel}
        name="sub_basin_code"
        id="oneliner_sub_basin_code"
        type="text"
        required
        placeholder={messages.sub_basin_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{subbasincodeInput}</Col>
    ) : (
      subbasincodeInput
    );
  };
  const PlayNameInput = () => {
    const playnameInput = (
      <FormInputWrapper
        label={messages.play_nameLabel}
        name="play_name"
        id="oneliner_play_name"
        type="text"
        required
        placeholder={messages.play_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{playnameInput}</Col>
    ) : (
      playnameInput
    );
  };

  const PlayTypeInput = () => {
    const playtypeInput = (
      <FormInputWrapper
        label={messages.play_typeLabel}
        name="play_type"
        id="oneliner_play_type"
        type="text"
        required
        placeholder={messages.play_typePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{playtypeInput}</Col>
    ) : (
      playtypeInput
    );
  };

  const PermitNumberInput = () => {
    const permitnumberInput = (
      <FormInputWrapper
        label={messages.permit_numberLabel}
        name="permit_number"
        id="oneliner_permit_number"
        type="text"
        required
        placeholder={messages.permit_numberPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{permitnumberInput}</Col>
    ) : (
      permitnumberInput
    );
  };

  const PermitDateInput = () => {
    const permitdateInput = (
      <FormInputWrapper
        label={messages.permit_dateLabel}
        name="permit_date"
        id="oneliner_permit_date"
        type="date"
        required
        placeholder={messages.permit_datePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{permitdateInput}</Col>
    ) : (
      permitdateInput
    );
  };

  const PermitStatusInput = () => {
    const permitstatusInput = (
      <FormInputWrapper
        label={messages.permit_statusLabel}
        name="permit_status"
        id="oneliner_permit_status"
        type="text"
        required
        placeholder={messages.permit_statusPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{permitstatusInput}</Col>
    ) : (
      permitstatusInput
    );
  };

  const PermitReissueDateInput = () => {
    const permitreissuedateInput = (
      <FormInputWrapper
        label={messages.permit_reissue_dateLabel}
        name="permit_reissue_date"
        id="oneliner_permit_reissue_date"
        type="date"
        required
        placeholder={messages.permit_reissue_datePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{permitreissuedateInput}</Col>
    ) : (
      permitreissuedateInput
    );
  };

  const LeaseAcresInput = () => {
    const leaseacresInput = (
      <FormInputWrapper
        label={messages.lease_acresLabel}
        name="lease_acres"
        id="oneliner_lease_acres"
        type="number"
        parserHandler={(value) => Number(value)}
        step=".01"
        // @ts-ignore
        numberInput
        required
        placeholder={messages.lease_acresPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{leaseacresInput}</Col>
    ) : (
      leaseacresInput
    );
  };

  const UnitOfMeasureInput = () => {
    const unitofmeasureInput = (
      <FormInputWrapper
        label={messages.unit_of_measureLabel}
        name="unit_of_measure"
        id="oneliner_unit_of_measure"
        type="text"
        required
        placeholder={messages.unit_of_measurePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{unitofmeasureInput}</Col>
    ) : (
      unitofmeasureInput
    );
  };

  const DepthTotalDrillerInput = () => {
    const depthtotaldrillerInput = (
      <FormInputWrapper
        label={messages.depth_total_drillerLabel}
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        name="depth_total_driller"
        id="oneliner_depth_total_driller"
        type="number"
        required
        placeholder={messages.depth_total_drillerPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthtotaldrillerInput}</Col>
    ) : (
      depthtotaldrillerInput
    );
  };

  const DepthTotalLoggerInput = () => {
    const depthtotalloggerInput = (
      <FormInputWrapper
        label={messages.depth_total_loggerLabel}
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        name="depth_total_logger"
        id="oneliner_depth_total_logger"
        type="number"
        required
        placeholder={messages.depth_total_loggerPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthtotalloggerInput}</Col>
    ) : (
      depthtotalloggerInput
    );
  };

  const DepthTrueVerticalInput = () => {
    const depthtrueverticalInput = (
      <FormInputWrapper
        label={messages.depth_true_verticalLabel}
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        name="depth_true_vertical"
        id="oneliner_depth_true_vertical"
        type="number"
        required
        placeholder={messages.depth_true_verticalPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthtrueverticalInput}</Col>
    ) : (
      depthtrueverticalInput
    );
  };

  const DepthWhipstockInput = () => {
    const depthwhipstockInput = (
      <FormInputWrapper
        label={messages.depth_whipstockLabel}
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        name="depth_whipstock"
        id="oneliner_depth_whipstock"
        type="number"
        required
        placeholder={messages.depth_whipstockPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthwhipstockInput}</Col>
    ) : (
      depthwhipstockInput
    );
  };

  const ClassInitialNameInput = () => {
    const classinitialnameInput = (
      <FormInputWrapper
        label={messages.class_initial_nameLabel}
        name="class_initial_name"
        id="oneliner_class_initial_name"
        type="text"
        required
        placeholder={messages.class_initial_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{classinitialnameInput}</Col>
    ) : (
      classinitialnameInput
    );
  };

  const ClassInitialCodeInput = () => {
    const classinitialcodeInput = (
      <FormInputWrapper
        label={messages.class_initial_codeLabel}
        name="class_initial_code"
        id="oneliner_class_initial_code"
        type="text"
        required
        placeholder={messages.class_initial_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{classinitialcodeInput}</Col>
    ) : (
      classinitialcodeInput
    );
  };

  const ClassFinalNameInput = () => {
    const classfinalnameInput = (
      <FormInputWrapper
        label={messages.class_final_nameLabel}
        name="class_final_name"
        id="oneliner_class_final_name"
        type="text"
        required
        placeholder={messages.class_final_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{classfinalnameInput}</Col>
    ) : (
      classfinalnameInput
    );
  };

  const ClassFinalCodeInput = () => {
    const classfinalcodeInput = (
      <FormInputWrapper
        label={messages.class_final_codeLabel}
        name="class_final_code"
        id="oneliner_class_final_code"
        type="text"
        required
        placeholder={messages.class_final_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{classfinalcodeInput}</Col>
    ) : (
      classfinalcodeInput
    );
  };

  const StatusFinalCodeInput = () => {
    const statusfinalcodeInput = (
      <FormInputWrapper
        label={messages.status_final_codeLabel}
        name="status_final_code"
        id="oneliner_status_final_code"
        type="text"
        required
        placeholder={messages.status_final_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{statusfinalcodeInput}</Col>
    ) : (
      statusfinalcodeInput
    );
  };

  const FormationProjectedNameInput = () => {
    const formationprojectednameInput = (
      <FormInputWrapper
        label={messages.formation_projected_nameLabel}
        name="formation_projected_name"
        id="oneliner_formation_projected_name"
        type="text"
        required
        placeholder={messages.formation_projected_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{formationprojectednameInput}</Col>
    ) : (
      formationprojectednameInput
    );
  };

  const DepthTotalProjectedInput = () => {
    const depthtotalprojectedInput = (
      <FormInputWrapper
        label={messages.depth_total_projectedLabel}
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        name="depth_total_projected"
        id="oneliner_depth_total_projected"
        type="number"
        required
        placeholder={messages.depth_total_projectedPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthtotalprojectedInput}</Col>
    ) : (
      depthtotalprojectedInput
    );
  };

  const FormationAtTdNameInput = () => {
    const formationattdnameInput = (
      <FormInputWrapper
        label={messages.formation_at_td_nameLabel}
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        name="formation_at_td_name"
        id="oneliner_formation_at_td_name"
        type="number"
        required
        placeholder={messages.formation_at_td_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{formationattdnameInput}</Col>
    ) : (
      formationattdnameInput
    );
  };

  const ProdfitFormationAtTdNameInput = () => {
    const prodfitformationattdnameInput = (
      <FormInputWrapper
        label={messages.prodfit_formation_at_td_nameLabel}
        name="prodfit_formation_at_td_name"
        id="oneliner_prodfit_formation_at_td_name"
        type="text"
        required
        placeholder={messages.prodfit_formation_at_td_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{prodfitformationattdnameInput}</Col>
    ) : (
      prodfitformationattdnameInput
    );
  };

  const FormationProducingNameInput = () => {
    const formationproducingnameInput = (
      <FormInputWrapper
        label={messages.play_typeLabel}
        name="formation_producing_name"
        id="oneliner_formation_producing_name"
        type="text"
        required
        placeholder={messages.formation_producing_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{formationproducingnameInput}</Col>
    ) : (
      formationproducingnameInput
    );
  };

  const ProdfitTopFormProdNameInput = () => {
    const prodfittopformprodnameInput = (
      <FormInputWrapper
        label={messages.prodfit_top_form_prod_nameLabel}
        name="prodfit_top_form_prod_name"
        id="oneliner_prodfit_top_form_prod_name"
        type="text"
        required
        placeholder={messages.prodfit_top_form_prod_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{prodfittopformprodnameInput}</Col>
    ) : (
      prodfittopformprodnameInput
    );
  };

  const ProdfitBaseFormProdNameInput = () => {
    const prodfitbaseformprodnameInput = (
      <FormInputWrapper
        label={messages.prodfit_base_form_prod_nameLabel}
        name="prodfit_base_form_prod_name"
        id="oneliner_prodfit_base_form_prod_name"
        type="text"
        required
        placeholder={messages.prodfit_base_form_prod_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{prodfitbaseformprodnameInput}</Col>
    ) : (
      prodfitbaseformprodnameInput
    );
  };

  const Prodfit80DegreeHeelPtFormInput = () => {
    const prodfit80degreeheelptformInput = (
      <FormInputWrapper
        label={messages.prodfit_80_degree_heel_pt_formLabel}
        name="prodfit_80_degree_heel_pt_form"
        id="oneliner_prodfit_80_degree_heel_pt_form"
        type="text"
        required
        placeholder={messages.prodfit_80_degree_heel_pt_formPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{prodfit80degreeheelptformInput}</Col>
    ) : (
      prodfit80degreeheelptformInput
    );
  };

  const ElevationReferenceValueInput = () => {
    const elevationreferencevalueInput = (
      <FormInputWrapper
        label={messages.elevation_reference_valueLabel}
        name="elevation_reference_value"
        id="oneliner_elevation_reference_value"
        type="number"
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        required
        placeholder={messages.elevation_reference_valuePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{elevationreferencevalueInput}</Col>
    ) : (
      elevationreferencevalueInput
    );
  };

  const ElevationReferenceDatumInput = () => {
    const elevationreferencedatumInput = (
      <FormInputWrapper
        label={messages.elevation_reference_datumLabel}
        name="elevation_reference_datum"
        id="oneliner_elevation_reference_datum"
        type="text"
        required
        placeholder={messages.elevation_reference_datumPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{elevationreferencedatumInput}</Col>
    ) : (
      elevationreferencedatumInput
    );
  };

  const GroundElevationInput = () => {
    const groundelevationInput = (
      <FormInputWrapper
        label={messages.ground_elevationLabel}
        name="ground_elevation"
        id="oneliner_ground_elevation"
        type="number"
        required
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        placeholder={messages.ground_elevationPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{groundelevationInput}</Col>
    ) : (
      groundelevationInput
    );
  };

  const ElevationDfInput = () => {
    const elevationdfInput = (
      <FormInputWrapper
        label={messages.elevation_dfLabel}
        name="elevation_df"
        id="oneliner_elevation_df"
        type="number"
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        required
        placeholder={messages.elevation_dfPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{elevationdfInput}</Col>
    ) : (
      elevationdfInput
    );
  };

  const DateFirstSpudInput = () => {
    const datefirstspudInput = (
      <FormInputWrapper
        label={messages.date_first_spudLabel}
        name="date_first_spud"
        id="oneliner_date_first_spud"
        type="date"
        required
        placeholder={messages.date_first_spudPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{datefirstspudInput}</Col>
    ) : (
      datefirstspudInput
    );
  };
  const DateSpudInput = () => {
    const datespudInput = (
      <FormInputWrapper
        label={messages.date_spudLabel}
        name="date_spud"
        id="oneliner_date_spud"
        type="date"
        required
        placeholder={messages.date_spudPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{datespudInput}</Col>
    ) : (
      datespudInput
    );
  };
  const DateCompletionInput = () => {
    const datecompletionInput = (
      <FormInputWrapper
        label={messages.date_completionLabel}
        name="date_completion"
        id="oneliner_date_completion"
        type="date"
        required
        placeholder={messages.date_completionPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{datecompletionInput}</Col>
    ) : (
      datecompletionInput
    );
  };
  const DateRigReleaseInput = () => {
    const daterigreleaseInput = (
      <FormInputWrapper
        label={messages.date_rig_releaseLabel}
        name="date_rig_release"
        id="oneliner_date_rig_release"
        type="date"
        required
        placeholder={messages.date_rig_releasePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{daterigreleaseInput}</Col>
    ) : (
      daterigreleaseInput
    );
  };
  const DateAbandonmentInput = () => {
    const dateabandonmentInput = (
      <FormInputWrapper
        label={messages.date_abandonmentLabel}
        name="date_abandonment"
        id="oneliner_date_abandonment"
        type="date"
        required
        placeholder={messages.date_abandonmentPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{dateabandonmentInput}</Col>
    ) : (
      dateabandonmentInput
    );
  };
  const DateFirstReportInput = () => {
    const datefirstreportInput = (
      <FormInputWrapper
        label={messages.date_first_reportLabel}
        name="date_first_report"
        id="oneliner_date_first_report"
        type="date"
        required
        placeholder={messages.date_first_reportPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{datefirstreportInput}</Col>
    ) : (
      datefirstreportInput
    );
  };
  const DateLastActivityInput = () => {
    const datelastactivityInput = (
      <FormInputWrapper
        label={messages.date_last_activityLabel}
        name="date_last_activity"
        id="oneliner_date_last_activity"
        type="date"
        required
        placeholder={messages.date_last_activityPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{datelastactivityInput}</Col>
    ) : (
      datelastactivityInput
    );
  };
  const ProdfitUpdateDateInput = () => {
    const prodfitupdatedateInput = (
      <FormInputWrapper
        label={messages.prodfit_update_dateLabel}
        name="prodfit_update_date"
        id="oneliner_prodfit_update_date"
        type="date"
        required
        placeholder={messages.prodfit_update_datePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{prodfitupdatedateInput}</Col>
    ) : (
      prodfitupdatedateInput
    );
  };

  const DepthWaterValueInput = () => {
    const depthwatervalueInput = (
      <FormInputWrapper
        label={messages.depth_water_valueLabel}
        name="depth_water_value"
        id="oneliner_depth_water_value"
        type="number"
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        required
        placeholder={messages.depth_water_valuePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthwatervalueInput}</Col>
    ) : (
      depthwatervalueInput
    );
  };

  const DepthWaterDatumInput = () => {
    const depthwaterdatumInput = (
      <FormInputWrapper
        label={messages.depth_water_datumLabel}
        name="depth_water_datum"
        id="oneliner_depth_water_datum"
        type="text"
        required
        placeholder={messages.depth_water_datumPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{depthwaterdatumInput}</Col>
    ) : (
      depthwaterdatumInput
    );
  };

  const SurfaceLatitudeInput = () => {
    const surfacelatitudeInput = (
      <FormInputWrapper
        label={messages.surface_latitudeLabel}
        name="surface_latitude"
        id="oneliner_surface_latitude"
        type="number"
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        required
        placeholder={messages.surface_latitudePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{surfacelatitudeInput}</Col>
    ) : (
      surfacelatitudeInput
    );
  };

  const SurfaceLongitudeInput = () => {
    const surfacelongitudeInput = (
      <FormInputWrapper
        label={messages.surface_longitudeLabel}
        name="surface_longitude"
        id="oneliner_surface_longitude"
        type="number"
        required
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        placeholder={messages.surface_longitudePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{surfacelongitudeInput}</Col>
    ) : (
      surfacelongitudeInput
    );
  };
  const SurfaceLlSourceInput = () => {
    const surfacellsourceInput = (
      <FormInputWrapper
        label={messages.surface_ll_sourceLabel}
        name="surface_ll_source"
        id="oneliner_surface_ll_source"
        type="text"
        required
        placeholder={messages.surface_ll_sourcePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{surfacellsourceInput}</Col>
    ) : (
      surfacellsourceInput
    );
  };

  const ProposedBhLatitudeInput = () => {
    const proposedbhlatitudeInput = (
      <FormInputWrapper
        label={messages.proposed_bh_latitudeLabel}
        name="proposed_bh_latitude"
        id="oneliner_proposed_bh_latitude"
        type="number"
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        required
        placeholder={messages.proposed_bh_latitudePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{proposedbhlatitudeInput}</Col>
    ) : (
      proposedbhlatitudeInput
    );
  };

  const ProposedBhLongitudeInput = () => {
    const proposedbhlongitudeInput = (
      <FormInputWrapper
        label={messages.proposed_bh_longitudeLabel}
        name="proposed_bh_longitude"
        id="oneliner_proposed_bh_longitude"
        type="number"
        required
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        placeholder={messages.proposed_bh_longitudePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{proposedbhlongitudeInput}</Col>
    ) : (
      proposedbhlongitudeInput
    );
  };
  const ProposedBhLlSourceInput = () => {
    const proposedbhllsourceInput = (
      <FormInputWrapper
        label={messages.proposed_bh_ll_sourceLabel}
        name="proposed_bh_ll_source"
        id="oneliner_proposed_bh_ll_source"
        type="text"
        required
        placeholder={messages.proposed_bh_ll_sourcePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{proposedbhllsourceInput}</Col>
    ) : (
      proposedbhllsourceInput
    );
  };

  const BhLatitudeInput = () => {
    const bhlatitudeInput = (
      <FormInputWrapper
        label={messages.bh_latitudeLabel}
        name="bh_latitude"
        id="oneliner_bh_latitude"
        type="number"
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        required
        placeholder={messages.bh_latitudePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{bhlatitudeInput}</Col>
    ) : (
      bhlatitudeInput
    );
  };

  const BhLongitudeInput = () => {
    const bhlongitudeInput = (
      <FormInputWrapper
        label={messages.bh_longitudeLabel}
        name="bh_longitude"
        id="oneliner_bh_longitude"
        type="number"
        required
        // @ts-ignore
        numberInput
        parserHandler={(value) => Number(value)}
        step=".01"
        placeholder={messages.bh_longitudePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{bhlongitudeInput}</Col>
    ) : (
      bhlongitudeInput
    );
  };
  const BhLlSourceInput = () => {
    const bhllsourceInput = (
      <FormInputWrapper
        label={messages.bh_ll_sourceLabel}
        name="bh_ll_source"
        id="oneliner_bh_ll_source"
        type="text"
        required
        placeholder={messages.bh_ll_sourcePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{bhllsourceInput}</Col>
    ) : (
      bhllsourceInput
    );
  };

  const ActivityCodeInput = () => {
    const activitycodeInput = (
      <FormInputWrapper
        label={messages.activity_codeLabel}
        name="activity_code"
        id="oneliner_activity_code"
        type="text"
        required
        placeholder={messages.activity_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{activitycodeInput}</Col>
    ) : (
      activitycodeInput
    );
  };

  const PermitFilerLongInput = () => {
    const permitfilerlongInput = (
      <FormInputWrapper
        label={messages.permit_filer_longLabel}
        name="permit_filer_long"
        id="oneliner_permit_filer_long"
        type="text"
        required
        placeholder={messages.permit_filer_longPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{permitfilerlongInput}</Col>
    ) : (
      permitfilerlongInput
    );
  };

  const PermitPhoneInput = () => {
    const permitphoneInput = (
      <FormInputWrapper
        label={messages.permit_phoneLabel}
        name="permit_phone"
        id="oneliner_permit_phone"
        type="text"
        required
        placeholder={messages.permit_phonePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{permitphoneInput}</Col>
    ) : (
      permitphoneInput
    );
  };

  const RecStatusInput = () => {
    const recstatusArray = [
      { label: messages.active, value: 'A' },
      { label: messages.deleted, value: 'D' },
    ];
    const rec_statusOptionList = recstatusArray.map((field) => (
      <Select.Option key={field.value} value={field.value}>
        <FormattedMessage {...field.label} />
      </Select.Option>
    ));
    const recstatusInput = (
      <SelectInputWrapper
        name="rec_status"
        id="rec_status"
        rules={[
          {
            required: true,
            message: <FormattedMessage {...messages.rec_statusRequired} />,
          },
        ]}
        label={messages.rec_statusLabel}
        required
      >
        {rec_statusOptionList}
      </SelectInputWrapper>
    );

    return responsive ? (
      <Col {...wrapperCol}>{recstatusInput}</Col>
    ) : (
      recstatusInput
    );
  };

  return {
    form: formInstance,
    Form: WrappedForm,
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
  };
};

export default useGetIHSWellOneLinerForm;
