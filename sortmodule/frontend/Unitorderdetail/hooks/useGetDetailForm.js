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



const useGetDetailForm = ({
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
  
  
 

 

  return {
    form: formInstance,
    Form: WrappedForm,
    EntityInput,
    SourceInput,
    EntityTypeInput,
  };
};

export default useGetDetailForm;
