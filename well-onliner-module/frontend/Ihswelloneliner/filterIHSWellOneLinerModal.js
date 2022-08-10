import React from 'react';
import { Button, Col } from 'antd';
import useGetIHSWellOneLinerFilterForm from 'containers/Ihswelloneliner/hooks/useGetIHSWellOneLinerFilterForm';
import PropTypes from 'prop-types';
import { setFilterFormValues } from 'containers/Ihswelloneliner/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
} from 'containers/Ihswelloneliner/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';

// @ts-ignore
const style = (React.CSSProperties = {
  background: '#0092ff',
  padding: '8px 0',
});

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
});

const FilterIHSWellOneLinerModal = ({ onFilter }) => {
  const dispatch = useDispatch();
  const { device } = useSelector(stateSelector);

  const {
    Form,
    form,
    FilterSourceInput,
    FilterApiNumberInput,
    FilterOperatorNameInput,
    FilterCurrentOperatorCityInput,
    FilterBasinCodeInput,
  } = useGetIHSWellOneLinerFilterForm({
    formName: 'filter-ihswelloneliner',
    device,
  });

  const onSubmitFilterForm = async (e) => {
    e.preventDefault();
    dispatch(setFilterFormValues(form.getFieldsValue()));
    onFilter();
  };

  const onResetFilterForm = async (e) => {
    e.preventDefault();
    form.resetFields();
    dispatch(setFilterFormValues({}));
    onFilter();
  };

  return (
    <Form>
      <FilterSourceInput />
      <FilterApiNumberInput />
      <FilterOperatorNameInput />
      <FilterCurrentOperatorCityInput />
      <FilterBasinCodeInput />

      <Col span={24} style={{ float: 'right', textAlign: 'right' }}>
        <Button
          type="default"
          className="ant-btn ant-btn-reset"
          onClick={onResetFilterForm}
          style={{ marginRight: '20px' }}
        >
          Reset
        </Button>
        <Button type="primary" className="" onClick={onSubmitFilterForm}>
          Filter
        </Button>
      </Col>
    </Form>
  );
};

FilterIHSWellOneLinerModal.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterIHSWellOneLinerModal;
