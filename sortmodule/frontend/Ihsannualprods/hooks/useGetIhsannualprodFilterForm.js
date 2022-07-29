import React from 'react';
import { Col, Form, Select, Button } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/Ihsannualprods/messages';
import commonMessages from 'common/messages';
import { FormattedMessage } from 'react-intl';
import SelectInputWrapper from 'components/SelectInputWrapper';
import FormInputWrapper from 'components/FormInputWrapper';

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


const useGetIhsannualprodFilterForm = ({
  responsive = true,
  formName = 'filterform',
  filterinitialValues = {},
  device,
}) => {
  const [filterformInstance] = Form.useForm();

  const filterWrappedForm = ({ ...props }) => (
    <FormWrapper
      {...props}
      values={filterinitialValues}
      formInstance={filterformInstance}
      layout={layout}
      device={device}
      responsive={responsive}
      name={formName}
      classname="form-ant-items"
    />
  );

  filterWrappedForm.Item = Form.Item;

  const FilterEntityInput = () => {
    const filterentityInput = (
      <FormInputWrapper
        label={messages.entityLabel}
        name="entity"
        id="filter_entity"
        type="text"
        placeholder={messages.entityPlaceHolder}
      />
    );

    return responsive ? <Col {...wrapperCol}>{filterentityInput}</Col> : filterentityInput;
  };

  
    const FilterWellNumInput = () => {
    const filterwellnumInput = (
      <FormInputWrapper
        label={messages.well_numLabel}
        name="well_num"
        id="filter_well_num"
        type="text"
        placeholder={messages.well_numPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filterwellnumInput}</Col>) : (filterwellnumInput);
  };
  
  
  const FilterApiInput = () => {
    const filterapiInput = (
      <FormInputWrapper
        label={messages.apiLabel}
        name="api"
        id="filter_api"
        type="text"
        placeholder={messages.apiPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filterapiInput}</Col>) : (filterapiInput);
  };
  
  
  const FilterRegulatoryApiInput = () => {
    const filterregulatory_apiInput = (
      <FormInputWrapper
        label={messages.regulatory_apiLabel}
        name="regulatory_api"
        id="filter_regulatory_api"
        type="text"
        placeholder={messages.regulatory_apiPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filterregulatory_apiInput}</Col>) : (filterregulatory_apiInput);
  };
  
  
  const FilterYearValInput = () => {
    const filteryearvalInput = (
      <FormInputWrapper
        label={messages.year_valLabel}
        name="year_val"
        id="filter_year_val"
		parserHandler={value => (value ? parseInt(value,10) : '')}
        placeholder={messages.year_valPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filteryearvalInput}</Col>) : (filteryearvalInput);
  };
  
  
   const FilterAnnualLiquidInput = () => {
    const filterannualliquidInput = (
      <FormInputWrapper
        label={messages.annual_liquidLabel}
		parserHandler={value => (value ? parseInt(value,10) : '')}
        name="annual_liquid"
        id="filter_annual_liquid"
        placeholder={messages.annual_liquidPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filterannualliquidInput}</Col>) : (filterannualliquidInput);
  }; 
  
  
  const FilterAnnualGasInput = () => {
    const filterannualgasInput = (
      <FormInputWrapper
        label={messages.annual_gasLabel}
        name="annual_gas"
        id="filter_annual_gas"
		parserHandler={value => (value ? parseInt(value,10) : '')}
        placeholder={messages.annual_gasPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filterannualgasInput}</Col>) : (filterannualgasInput);
  }; 
  
  
  const FilterAnnualWaterInput = () => {
    const filterannualwaterInput = (
      <FormInputWrapper
        label={messages.annual_waterLabel}
        name="annual_water"
        id="filter_annual_water"
		parserHandler={value => (value ? parseInt(value,10) : '')}
        placeholder={messages.annual_waterPlaceHolder}
      />
    );
    return responsive ? (<Col {...wrapperCol}>{filterannualwaterInput}</Col>) : (filterannualwaterInput);
  };  
  
  
  const FilterSubmitInput = () => {
    const filterSubmitInput = (
      <Button 
        name="filter_annual_submit"
        id="filter_annual_submit">
		Filter
		</Button>
		
    );
    return responsive ? (<Col {...wrapperCol}>{filterSubmitInput}</Col>) : (filterSubmitInput);
  };  
  
  
    const FilterResetBtn = () => {
    const filterResetBtn = (
      <Button 
        name="filter_annual_reset"
        id="filter_annual_reset">
		Filter
		</Button>
		
    );
    return responsive ? (<Col {...wrapperCol}>{filterResetBtn}</Col>) : (filterResetBtn);
  };  
  
 
 

 

  return {
    form: filterformInstance,
    Form: filterWrappedForm,
    FilterEntityInput,
	FilterWellNumInput,
	FilterApiInput,
	FilterRegulatoryApiInput,
	FilterYearValInput,
	FilterAnnualLiquidInput,
	FilterAnnualGasInput,
	FilterAnnualWaterInput,
	FilterSubmitInput,
	FilterResetBtn
  };
};

export default useGetIhsannualprodFilterForm;
