import React from 'react';
import { Col, Form, Button } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/Ihswelloneliner/messages';

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

const useGetIHSWellOneLinerFilterForm = ({
  responsive = true,
  formName = 'filterform',
  filterinitialValues = {},
  device,
}) => {
  const [filterformInstance] = Form.useForm();

  const filterWrappedForm = ({ ...props }) => (
    // @ts-ignore
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

  const FilterSourceInput = () => {
    const filtersourceInput = (
      <FormInputWrapper
        label={messages.sourceLabel}
        name="source"
        id="oneliner_filter_source"
        type="text"
        placeholder={messages.sourcePlaceHolder}
      />
    );

    return responsive ? (
      <Col {...wrapperCol}>{filtersourceInput}</Col>
    ) : (
      filtersourceInput
    );
  };

  const FilterApiNumberInput = () => {
    const filterapinumberInput = (
      <FormInputWrapper
        label={messages.api_numberLabel}
        name="api_number"
        id="oneliner_filter_api_number"
        type="text"
        placeholder={messages.api_numberPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filterapinumberInput}</Col>
    ) : (
      filterapinumberInput
    );
  };

  const FilterOperatorNameInput = () => {
    const filteroperatornameInput = (
      <FormInputWrapper
        label={messages.operator_nameLabel}
        name="operator_name"
        id="oneliner_filter_operator_name"
        type="text"
        placeholder={messages.operator_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filteroperatornameInput}</Col>
    ) : (
      filteroperatornameInput
    );
  };

  const FilterCurrentOperatorCityInput = () => {
    const filtercurrentoperatorcityInput = (
      <FormInputWrapper
        label={messages.current_operator_cityLabel}
        name="current_operator_city"
        id="oneliner_filter_current_operator_city"
        type="text"
        placeholder={messages.current_operator_cityPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filtercurrentoperatorcityInput}</Col>
    ) : (
      filtercurrentoperatorcityInput
    );
  };

  const FilterBasinCodeInput = () => {
    const filterbasincodeInput = (
      <FormInputWrapper
        label={messages.basin_codeLabel}
        name="basin_code"
        id="filter_basin_code"
        type="text"
        placeholder={messages.basin_codePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filterbasincodeInput}</Col>
    ) : (
      filterbasincodeInput
    );
  };

  return {
    form: filterformInstance,
    Form: filterWrappedForm,
    FilterSourceInput,
    FilterApiNumberInput,
    FilterOperatorNameInput,
    FilterCurrentOperatorCityInput,
    FilterBasinCodeInput,
  };
};

export default useGetIHSWellOneLinerFilterForm;
