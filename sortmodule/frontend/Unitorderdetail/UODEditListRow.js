import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/Unitorderdetail/reducer';
import { createStructuredSelector } from 'reselect';
import saga from 'containers/Unitorderdetail/saga';


import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeInitialValuesSelector,
} from 'containers/Unitorderdetail/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  clearFormField: makeClearFormFieldSelector(),
  initialValues: makeInitialValuesSelector(),
});

export default function UODEditListRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  
  const dispatch = useDispatch();
  const { errors, device, clearFormField, initialValues } =
  useSelector(stateSelector);

  return (
    <Row key={'detail' + editFormData.id} className="truthy-dynamic-body">
      <Col key={'tract_no_' + editFormData.id}>
        <div>
          <input
            type="text"
            required
            name="tract_no"
            placeholder="Tract No"
            value={editFormData.tract_no}
            onChange={handleEditFormChange}
          />
        </div>
      </Col>
      <Col key={'gross_area_in_acres' + editFormData.id}>
        <div>
          <input
            name="gross_area_in_acres"
            placeholder="Gross Area in Acres"
            onChange={handleEditFormChange}
            value={editFormData.gross_area_in_acres}
          />
        </div>
      </Col>
      <Col key={'net_area_in_acres' + editFormData.id}>
        <div>
          <input
            name="net_area_in_acres"
            placeholder="Net Area in Acres"
            onChange={handleEditFormChange}
            value={editFormData.net_area_in_acres}
          />
        </div>
      </Col>
      <Col key={'pct_of_unit' + editFormData.id}>
        <div>
          <input
            name="pct_of_unit"
            placeholder="PCT Of Unit"
            onChange={handleEditFormChange}
            value={editFormData.pct_of_unit}
          />
        </div>
      </Col>
      <Col key={'ownership_display_name' + editFormData.id}>
        <div>
          <input
            name="ownership_display_name"
            placeholder="Ownership Display Name"
            onChange={handleEditFormChange}
            value={editFormData.ownership_display_name}
          />
        </div>
      </Col>
      
      <Col key={'interest_type' + editFormData.id}>
        <div>
          <select
            name="interest_type"
            value={editFormData.interest_type}
            onChange={handleEditFormChange}
          >
            <option value="1">Mineral Interest</option>
            <option value="2">Working Interest</option>
            <option value="3">Unleased Mineral Interest</option>
          </select>
        </div>
      </Col>
     
      <Col className="action" key={'action_' + editFormData.id}>
        <div>
          <button
            className="btn-sm-primary"
            key={'update_' + editFormData.id}
            type="submit"
          >
            Save
          </button>
          <button key={'cancel_' + editFormData.id} onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </Col>
    </Row>
  );
}
