import React, { useEffect } from 'react';
import { Modal, Button, Row, Col, Divider } from 'antd';
import useGetIhsannualprodFilterForm from 'containers/Ihsannualprods/hooks/useGetIhsannualprodFilterForm';
import { useIntl } from 'react-intl';
import messages from 'containers/Ihsannualprods/messages';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFilterFormValues,
  submitFormAction,
} from 'containers/Ihsannualprods/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
} from 'containers/Ihsannualprods/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';

const style = React.CSSProperties = { background: '#0092ff', padding: '8px 0' };


const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
});

const FilterIhsannualprodModal = ({ onFilter, visible }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField } = useSelector(stateSelector);

  const {
    Form,
    form,
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
  } = useGetIhsannualprodFilterForm({
    formName: 'filter-ihsannualprod',
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
        <FilterEntityInput />
        <FilterWellNumInput />
        <FilterApiInput />
        <FilterRegulatoryApiInput />
        <FilterYearValInput />
		<FilterAnnualLiquidInput />
		<FilterAnnualGasInput />
		<FilterAnnualWaterInput />
		
		
		
		   <Col span={24} style={{float:'right',textAlign:'right'}} > 
		<Button type="default" className="ant-btn ant-btn-reset" onClick={onResetFilterForm} style={{marginRight:'20px'}}> Reset </Button>
		  <Button type="primary" className="" onClick={onSubmitFilterForm}> Filter </Button>
		</Col>
			 
			 
		
		
			  
      </Form>
   
  );
};

FilterIhsannualprodModal.propTypes = {
  visible: PropTypes.bool,
  onFilter: PropTypes.func.isRequired
};

export default FilterIhsannualprodModal;
