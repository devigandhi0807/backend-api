import React from 'react';
import { Button, Col } from 'antd';
import useGetUnitOrderDetailFilterForm from 'containers/Unitorderdetail/hooks/useGetUnitOrderDetailFilterForm';
import { useIntl } from 'react-intl';

import PropTypes from 'prop-types';
import { setFilterFormValues } from 'containers/Unitorderdetail/actions';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
} from 'containers/Unitorderdetail/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  isLoading: makeIsLoadingSelector(),
});

function FilterUnitOrderDetailModal({ onFilter, visible }) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, clearFormField } = useSelector(stateSelector);

  const {
    Form,
    form,
    FilterTractNoInput,
    FilterUnitOrderIdInput,
    FilterInterestTypeInput,
    FilterOwnershipDisplayNameInput,
  } = useGetUnitOrderDetailFilterForm({
    formName: 'filter-unitorderdetail',
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
      <FilterTractNoInput />,
      <FilterUnitOrderIdInput />,
      <FilterInterestTypeInput />,
      <FilterOwnershipDisplayNameInput />,
      <Col span={24} style={{ float: 'right', textAlign: 'right' }}>
        <Button
          type="default"
          className="ant-btn ant-btn-reset"
          onClick={onResetFilterForm}
          style={{ marginRight: '20px' }}
        >
          {' '}
          Reset{' '}
        </Button>
        <Button type="primary" className="" onClick={onSubmitFilterForm}>
          {' '}
          Filter{' '}
        </Button>
      </Col>
    </Form>
  );
}

FilterUnitOrderDetailModal.propTypes = {
  visible: PropTypes.bool,
  onFilter: PropTypes.func.isRequired,
};

export default FilterUnitOrderDetailModal;
