import React from 'react';
import { Col, Form, Select } from 'antd';
import FormWrapper from 'components/FormWrapper';
import messages from 'containers/Unitorderdetail/messages';

import { FormattedMessage } from 'react-intl';
import SelectInputWrapper from 'components/SelectInputWrapper';
import FormInputWrapper from 'components/FormInputWrapper';

import { interestType } from 'common/data';

const interestTypeArray = interestType;
const layout = {
  labelCol: {},
  wrapperCol: {},
};

const wrapperCol = {};

const useGetUnitOrderDetailForm = ({
  responsive = true,
  //  formName = 'form',
  // initialValues = {},
  device,
}) => {
  const [formInstance] = Form.useForm();

  const WrappedForm = ({ ...props }) => (
    <FormWrapper
      {...props}
      //  values={initialValues}
      formInstance={formInstance}
      layout={layout}
      device={device}
      responsive={responsive}
      // name={formName}
      classname=""
    />
  );

  WrappedForm.Item = Form.Item;

  const TractNoInput = ({ ...inputProps }) => {
    const tractnoInput = (
      <FormInputWrapper
        {...inputProps}
        // label={messages.tract_noLabel}
        name="tract_no"
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

  const GrossAreaInAcresInput = ({ ...inputProps }) => {
    const grossareainacresInput = (
      <FormInputWrapper
        {...inputProps}
        //label={messages.gross_area_in_acresLabel}
        name="gross_area_in_acres"
        type="number"
        required
        // @ts-ignore
        numberInput
        placeholder={messages.gross_area_in_acresPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{grossareainacresInput}</Col>
    ) : (
      grossareainacresInput
    );
  };
  const NetAreaInAcresInput = ({ ...inputProps }) => {
    const netareainacresInput = (
      <FormInputWrapper
        {...inputProps}
        // label={messages.net_area_in_acresLabel}
        name="net_area_in_acres"
        type="number"
        required
        // @ts-ignore
        numberInput
        placeholder={messages.net_area_in_acresPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{netareainacresInput}</Col>
    ) : (
      netareainacresInput
    );
  };

  const PctOfUnitInput = ({ ...inputProps }) => {
    const pctofunitInput = (
      <FormInputWrapper
        // label={messages.pct_of_unitLabel}
        name="pct_of_unit"
        type="number"
        required
        numberInput
        placeholder={messages.pct_of_unitPlaceHolder}
      />
    );
    return responsive ? (
      <Col {...wrapperCol}>{pctofunitInput}</Col>
    ) : (
      pctofunitInput
    );
  };
  const CurNotesInput = ({ ...inputProps }) => {
    const curnotesInput = (
      <FormInputWrapper
        {...inputProps}
        // label={messages.cur_notesLabel}
        name="cur_notes"
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

  const OwnershipDisplayNameInput = ({ ...inputProps }) => {
    const ownershipdisplaynameInput = (
      <FormInputWrapper
        //  label={messages.ownership_display_nameLabel}
        name="ownership_display_name"
        {...inputProps}
        type="text"
        required
        placeholder={messages.ownership_display_namePlaceHolder}
      />
    );
    return responsive ? (
      <Col style={{width:'20%'}} {...wrapperCol}>{ownershipdisplaynameInput}</Col>
    ) : (
      ownershipdisplaynameInput
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
     //   label={messages.interest_typeLabel}
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
		disabled
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
    GrossAreaInAcresInput,
    NetAreaInAcresInput,
    PctOfUnitInput,
    OwnershipDisplayNameInput,
    InterestTypeInput,
    CurNotesInput,
    RecStatusInput,
  };
};

export default useGetUnitOrderDetailForm;
