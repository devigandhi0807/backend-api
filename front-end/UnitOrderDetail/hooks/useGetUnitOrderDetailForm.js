import React from 'react';
import { Col, Form, Select } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/UnitOrderDetail/messages';

import { FormattedMessage } from 'react-intl';
import SelectInputWrapper from 'components/SelectInputWrapper';
import FormInputWrapper from 'components/FormInputWrapper';

import { interestType } from 'common/data';

const interestTypeArray = interestType;
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

const useGetUnitOrderDetailForm = ({
  responsive = true,
  formName = 'form',
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

  const TractNoInput = () => {
    const tractnoInput = (
      <FormInputWrapper
        label={messages.tract_noLabel}
        name="tract_no"
        id="tract_no"
        type="text"
        required
        placeholder={messages.tract_noPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{tractnoInput}</Col>
    ) : (
      tractnoInput
    );
  };
  const GrossAreaInAcresInput = () => {
    const grossareainacresInput = (
      <FormInputWrapper
        label={messages.gross_area_in_acresLabel}
        name="gross_area_in_acres"
        id="gross_area_in_acres"
        type="text"
        required
        placeholder={messages.gross_area_in_acresPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{grossareainacresInput}</Col>
    ) : (
      grossareainacresInput
    );
  };
  const NetAreaInAcresInput = () => {
    const netareainacresInput = (
      <FormInputWrapper
        label={messages.net_area_in_acresLabel}
        name="net_area_in_acres"
        id="net_area_in_acres"
        type="text"
        required
        placeholder={messages.net_area_in_acresPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{netareainacresInput}</Col>
    ) : (
      netareainacresInput
    );
  };
  const PctOfUnitInput = () => {
    const pctofunitInput = (
      <FormInputWrapper
        label={messages.pct_of_unitLabel}
        name="pct_of_unit"
        id="pct_of_unit"
        type="text"
        required
        placeholder={messages.pct_of_unitPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{pctofunitInput}</Col>
    ) : (
      pctofunitInput
    );
  };
  const InterestTypeInput = () => {
    const interest_typeOptionList = interestTypeArray.map((field) => (
      <Select.Option key={field.id} value={field.id}>
        {field.label}
      </Select.Option>
    ));
    const interesttypeInput = (
      <SelectInputWrapper
        name="interest_type"
        mode="single"
        id="interest_type"
        label={messages.interest_typeLabel}
      >
        {interest_typeOptionList}
      </SelectInputWrapper>
    );

    return responsive ? (
      <Col {...wrapperCol}>{interesttypeInput}</Col>
    ) : (
      interesttypeInput
    );
  };

  const OwnershipDisplayNameInput = () => {
    const ownershipdisplaynameInput = (
      <FormInputWrapper
        label={messages.ownership_display_nameLabel}
        name="ownership_display_name"
        id="ownership_display_name"
        type="text"
        required
        placeholder={messages.ownership_display_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{ownershipdisplaynameInput}</Col>
    ) : (
      ownershipdisplaynameInput
    );
  };

  const CurNotesInput = () => {
    const curnotesInput = (
      <FormInputWrapper
        label={messages.cur_notesLabel}
        name="cur_notes"
        id="cur_notes"
        type="text"
        required
        placeholder={messages.cur_notesPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{curnotesInput}</Col>
    ) : (
      curnotesInput
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
    TractNoInput,
    InterestTypeInput,
    GrossAreaInAcresInput,
    NetAreaInAcresInput,
    PctOfUnitInput,
    OwnershipDisplayNameInput,
    CurNotesInput,
    RecStatusInput,
  };
};

export default useGetUnitOrderDetailForm;
