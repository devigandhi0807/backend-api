import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
//import useGetUnitOrderDetailForm from 'containers/Unitorderdetail/hooks/useGetUnitOrderDetailForm';
import { useIntl } from 'react-intl';
import messages from 'containers/Unitorderdetail/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  setuoIdAction,
  submitFormAction,
} from 'containers/Unitorderdetail/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
  makeuoIdSelector,
} from 'containers/Unitorderdetail/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';
import { useParams } from 'react-router-dom';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
  uoPId: makeuoIdSelector(),
});

function CreateUnitOrderDetailModal({ onCancel, visible }) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField, uoPId } = useSelector(stateSelector);
  const { uoId = uoPId } = useParams();

  // const {
  //   Form,
  //   form,
  //   TractNoInput,
  //   InterestTypeInput,
  //   GrossAreaInAcresInput,
  //   NetAreaInAcresInput,
  //   PctOfUnitInput,
  //   OwnershipDisplayNameInput,
  //   CurNotesInput,
  //   RecStatusInput,
  // } = useGetUnitOrderDetailForm({
  //   formName: 'create-unitorderdetail',
  //   device,
  // });

  const onSubmitCreateForm = async () => {
    // await form.validateFields();
    // console.log(formFields.length);
    if (formFields.length > 0) {
      for (let i = 0; i < formFields.length; i++) {
        await dispatch(
          setFormValues(
            JSON.stringify({
              tract_no: formFields[i].tract_no,
              gross_area_in_acres: parseFloat(
                formFields[i].gross_area_in_acres,
              ),
              net_area_in_acres: parseFloat(formFields[i].net_area_in_acres),
              pct_of_unit: parseFloat(formFields[i].pct_of_unit),
              interest_type: parseInt(formFields[i].interest_type),
              ownership_display_name: formFields[i].ownership_display_name,
              cur_notes: formFields[i].cur_notes,
              rec_status: formFields[i].rec_status,
            }),
          ),
        );

        await dispatch(setuoIdAction(uoId));

        //dispatch(setFormValues(form.getFieldsValue()));
        await dispatch(submitFormAction());
      }
    }
  };
  const onCancelModal = () => {
    onCancel();
    // form.resetFields();
  };

  useEffect(() => {
    if (clearFormField) {
      dispatch(clearFormAction());
      // if (form) {
      //   form.resetFields();
      // }
      onCancel();
    }
  }, [clearFormField]);

  useEffect(() => {
    if (errors?.length) {
      // form.setFields(errors);
    }
  }, [errors]);

  const [formFields, setFormFields] = useState([
    {
      tract_no: '',
      gross_area_in_acres: '',
      net_area_in_acres: '',
      pct_of_unit: '',
      interest_type: '',
      ownership_display_name: '',
      cur_notes: '',
      rec_status: 'A',
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  // const submit = (e) => {
  //   e.preventDefault();
  //   dispatch(setuoIdAction(uoId));
  //   dispatch(setFormValues(formFields));
  //   dispatch(submitFormAction());
  //   // console.log(formFields);
  // };

  const addFields = () => {
    let object = {
      tract_no: '',
      gross_area_in_acres: '',
      net_area_in_acres: '',
      pct_of_unit: '',
      interest_type: '',
      ownership_display_name: '',
      cur_notes: '',
      rec_status: 'A',
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <Modal
      title={intl.formatMessage(messages.addTitle)}
      visible={visible}
      onOk={onSubmitCreateForm}
      onCancel={onCancelModal}
      okText={intl.formatMessage(commonMessage.okLabel)}
      cancelText={intl.formatMessage(commonMessage.cancel)}
      width={800}
    >
      <form onSubmit={onSubmitCreateForm}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="tract_no"
                placeholder="Tract No"
                onChange={(event) => handleFormChange(event, index)}
                value={form.tract_no}
              />
              <input
                name="gross_area_in_acres"
                placeholder="Gross Area in Acres"
                onChange={(event) => handleFormChange(event, index)}
                value={form.gross_area_in_acres}
              />
              <input
                name="net_area_in_acres"
                placeholder="Net Area in Acres"
                onChange={(event) => handleFormChange(event, index)}
                value={form.net_area_in_acres}
              />
              <input
                name="pct_of_unit"
                placeholder="PCT Of Unit"
                onChange={(event) => handleFormChange(event, index)}
                value={form.pct_of_unit}
              />
              <input
                name="interest_type"
                placeholder="Interest Type"
                onChange={(event) => handleFormChange(event, index)}
                value={form.interest_type}
              />
              <input
                name="ownership_display_name"
                placeholder="Ownership Display Name"
                onChange={(event) => handleFormChange(event, index)}
                value={form.ownership_display_name}
              />

              <textarea
                name="cur_notes"
                placeholder="Cur Notes"
                onChange={(event) => handleFormChange(event, index)}
                value={form.cur_notes}
              />
              <select
                name="rec_status"
                value={form.rec_status}
                onChange={(event) => handleFormChange(event, index)}
              >
                <option value="A">Active</option>
                <option value="D">Delete</option>
              </select>
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      {/* <button onClick={submit}>Submit</button> */}
      {/* <Form>
        <TractNoInput />
        <InterestTypeInput />
        <GrossAreaInAcresInput />
        <NetAreaInAcresInput />
        <PctOfUnitInput />
        <OwnershipDisplayNameInput />
        <CurNotesInput />
        <RecStatusInput />
      </Form> */}
    </Modal>
  );
}

CreateUnitOrderDetailModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default CreateUnitOrderDetailModal;
