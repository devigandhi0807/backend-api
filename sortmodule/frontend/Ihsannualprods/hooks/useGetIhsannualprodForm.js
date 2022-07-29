import React from 'react';
import { Col, Form, Select } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/Ihsannualprods/messages';
import commonMessages from 'common/messages';
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



const useGetIhsannualprodForm = ({
  responsive = true,
  formName = 'form',
  roles = [],
  initialValues = {},
  device,
}) => {
  const [formInstance] = Form.useForm();

  const WrappedForm = ({ ...props }) => (
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
        placeholder={messages.entityPlaceHolder}
      />
    );

    return responsive ? <Col {...wrapperCol}>{entityInput}</Col> : entityInput;
  };

  const SourceInput = () => {
    const sourceInput = (
      <FormInputWrapper
        label={messages.sourceLabel}
        name="source"
        id="source"
        type="text"
        placeholder={messages.sourcePlaceHolder}
      />
    );
    return responsive ? <Col {...wrapperCol}>{sourceInput}</Col> : sourceInput;
  };

  const EntityTypeInput = () => {
    const entitytypeInput = (
      <FormInputWrapper
        label={messages.entity_typeLabel}
        name="entity_type"
        id="entity_type"
        type="text"
        placeholder={messages.entity_typePlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{entitytypeInput}</Col>) : (entitytypeInput);
  };
  
  
  const PrimaryProductInput = () => {
    const primaryproductInput = (
      <FormInputWrapper
        label={messages.primary_productLabel}
        name="primary_product"
        id="primary_product"
        type="text"
        placeholder={messages.primary_productPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{primaryproductInput}</Col>) : (primaryproductInput);
  };
  
  
    const LeaseNameInput = () => {
    const leasenameInput = (
      <FormInputWrapper
        label={messages.lease_nameLabel}
        name="lease_name"
        id="lease_name"
        type="text"
        placeholder={messages.lease_namePlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{leasenameInput}</Col>) : (leasenameInput);
  };
  
  
    const WellNumInput = () => {
    const wellnumInput = (
      <FormInputWrapper
        label={messages.well_numLabel}
        name="well_num"
        id="well_num"
        type="text"
        placeholder={messages.well_numPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{wellnumInput}</Col>) : (wellnumInput);
  };
  
  
  const ApiInput = () => {
    const apiInput = (
      <FormInputWrapper
        label={messages.apiLabel}
        name="api"
        id="api"
        type="text"
        placeholder={messages.apiPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{apiInput}</Col>) : (apiInput);
  };
  
  
  const RegulatoryApiInput = () => {
    const regulatory_apiInput = (
      <FormInputWrapper
        label={messages.regulatory_apiLabel}
        name="regulatory_api"
        id="regulatory_api"
        type="text"
        placeholder={messages.regulatory_apiPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{regulatory_apiInput}</Col>) : (regulatory_apiInput);
  };
  
  
  const YearValInput = () => {
    const yearvalInput = (
      <FormInputWrapper
        label={messages.year_valLabel}
        name="year_val"
        id="year_val"
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
        placeholder={messages.year_valPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{yearvalInput}</Col>) : (yearvalInput);
  };
  
  
   const AnnualLiquidInput = () => {
    const annualliquidInput = (
      <FormInputWrapper
        label={messages.annual_liquidLabel}
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
		step=".01"
        name="annual_liquid"
        id="annual_liquid"
        type="number"
        placeholder={messages.annual_liquidPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{annualliquidInput}</Col>) : (annualliquidInput);
  }; 
  
  
  const AnnualGasInput = () => {
    const annualgasInput = (
      <FormInputWrapper
        label={messages.annual_gasLabel}
        name="annual_gas"
        id="annual_gas"
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
        placeholder={messages.annual_gasPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{annualgasInput}</Col>) : (annualgasInput);
  }; 
  
  
  const AnnualWaterInput = () => {
    const annualwaterInput = (
      <FormInputWrapper
        label={messages.annual_waterLabel}
        name="annual_water"
        id="annual_water"
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
        placeholder={messages.annual_waterPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{annualwaterInput}</Col>) : (annualwaterInput);
  };  
  
  const PriorCumLiquidInput = () => {
    const priorcumliquidInput = (
      <FormInputWrapper
        label={messages.prior_cum_liquidLabel}
        name="prior_cum_liquid"
        id="prior_cum_liquid"
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
        placeholder={messages.prior_cum_liquidPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{priorcumliquidInput}</Col>) : (priorcumliquidInput);
  };   
  
  
  const PriorCumGasInput = () => {
    const priorcumgasInput = (
      <FormInputWrapper
        label={messages.prior_cum_gasLabel}
        name="prior_cum_gas"
        id="prior_cum_gas"
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
        placeholder={messages.prior_cum_gasPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{priorcumgasInput}</Col>) : (priorcumgasInput);
  };  


  const PriorCumWaterInput = () => {
    const priorcumwaterInput = (
      <FormInputWrapper
        label={messages.prior_cum_waterLabel}
        name="prior_cum_water"
        id="prior_cum_water"
        type="number"
		numberInput
		parserHandler={value => (value ? Number(value) : '')}
        placeholder={messages.prior_cum_waterPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{priorcumwaterInput}</Col>) : (priorcumwaterInput);
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
        label={messages.rec_statusLabel}
      >
        {rec_statusOptionList}
      </SelectInputWrapper>
    );

    return responsive ? <Col {...wrapperCol}>{recstatusInput}</Col> : recstatusInput;
  };

 

  return {
    form: formInstance,
    Form: WrappedForm,
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
  };
};

export default useGetIhsannualprodForm;
