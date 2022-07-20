import { Row, Col } from 'antd';
import React from 'react';

export default function UODEditListRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
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
      <Col key={'cur_notes' + editFormData.id}>
        <div>
          <textarea
            name="cur_notes"
            placeholder="Cur Notes"
            onChange={handleEditFormChange}
            value={editFormData.cur_notes}
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
      <Col key={'rec_status' + editFormData.id}>
        <div>
          <select
            name="rec_status"
            value={editFormData.rec_status}
            onChange={handleEditFormChange}
          >
            <option value="A">Active</option>
            <option value="D">Delete</option>
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
