import React from 'react';
import { Col, Form, Select } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/Unitorderdetail/messages';

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

const useGetUnitOrderDetailFilterForm = ({
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

  const FilterTractNoInput = () => {
    const filtertractnoInput = (
      <FormInputWrapper
        label={messages.tract_noLabel}
        name="tract_no"
        id="filter_tract_no"
        type="text"
        required
        placeholder={messages.tract_noPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filtertractnoInput}</Col>
    ) : (
      filtertractnoInput
    );
  };

  const FilterUnitOrderIdInput = () => {
    const filterUnitorderidInput = (
      <FormInputWrapper
        label={messages.Unit_order_idLabel}
        name="Unit_order_id"
        id="filter_Unit_order_id"
        type="text"
        required
        placeholder={messages.Unit_order_idPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filterUnitorderidInput}</Col>
    ) : (
      filterUnitorderidInput
    );
  };
  const FilterInterestTypeInput = () => {
    const filterinterest_typeArray = [
      { label: 'Mineral Interest', id: 1 },
      { label: 'Working Interest', id: 2 },
      { label: 'Unleased Mineral Interest', id: 3 },
    ];
    const interest_typeOptionList = filterinterest_typeArray.map((field) => (
      <Select.Option key={field.id} value={field.id}>
        {field.label}
      </Select.Option>
    ));
    const filterinterest_typeInput = (
      <SelectInputWrapper
        name="interest_type"
        mode="multiple"
        id="interest_type"
        label={messages.interest_typeLabel}
      >
        {interest_typeOptionList}
      </SelectInputWrapper>
    );

    return responsive ? (
      <Col {...wrapperCol}>{filterinterest_typeInput}</Col>
    ) : (
      filterinterest_typeInput
    );
  };

  const FilterOwnershipDisplayNameInput = () => {
    const filterownershipdisplaynameInput = (
      <FormInputWrapper
        label={messages.ownership_display_nameLabel}
        name="ownership_display_name"
        id="filter_ownership_display_name"
        type="text"
        required
        placeholder={messages.ownership_display_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{filterownershipdisplaynameInput}</Col>
    ) : (
      filterownershipdisplaynameInput
    );
  };

  return {
    form: filterformInstance,
    Form: filterWrappedForm,
    FilterTractNoInput,
    FilterUnitOrderIdInput,
    FilterInterestTypeInput,
    FilterOwnershipDisplayNameInput,
  };
};

export default useGetUnitOrderDetailFilterForm;
