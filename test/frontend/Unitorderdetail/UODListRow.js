import React from 'react';
import { Col, Modal, Row } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import commonMessages from 'common/messages';
import { ExclamationCircleOutlined } from '@ant-design/icons';
export default function UODListRow({
  unitorderdetail,
  handleEditClick,
  handleDeleteClick,
}) {
  const intl = useIntl();
  return (
    <Row key={'detail' + unitorderdetail.id} className="truthy-dynamic-body">
      <Col key={'tract_no_' + unitorderdetail.id}>
        <div>{unitorderdetail.tract_no}</div>
      </Col>
      <Col key={'gross_area_in_acres' + unitorderdetail.id}>
        <div>{unitorderdetail.gross_area_in_acres}</div>
      </Col>
      <Col key={'net_area_in_acres' + unitorderdetail.id}>
        <div>{unitorderdetail.net_area_in_acres}</div>
      </Col>
      <Col key={'pct_of_unit' + unitorderdetail.id}>
        <div>{unitorderdetail.pct_of_unit}</div>
      </Col>
      <Col key={'ownership_display_name' + unitorderdetail.id}>
        <div>{unitorderdetail.ownership_display_name}</div>
      </Col>
      <Col key={'cur_notes' + unitorderdetail.id}>
        <div>{unitorderdetail.cur_notes}</div>
      </Col>
      <Col key={'interest_type' + unitorderdetail.id}>
        <div>{unitorderdetail.interest_type}</div>
      </Col>
      <Col key={'rec_status' + unitorderdetail.id}>
        <div>{unitorderdetail.rec_status}</div>
      </Col>
      <Col className="action" key={'action_' + unitorderdetail.id}>
        <div>
          <button
            className="btn-sm-primary"
            key={'update_' + unitorderdetail.id}
            onClick={(event) => handleEditClick(event, unitorderdetail)}
          >
            Edit
          </button>
          <button
            key={'delete_' + unitorderdetail.id}
            onClick={() => {
              Modal.confirm({
                okText: intl.formatMessage(commonMessages.yesLabel),
                okType: 'danger',
                cancelText: intl.formatMessage(commonMessages.noLabel),
                icon: <ExclamationCircleOutlined />,
                title: intl.formatMessage(commonMessages.confirmationMessage),
                onOk: (close) =>
                  handleDeleteClick(unitorderdetail.id) && close(),
              });
            }}
          >
            Delete
          </button>
        </div>
      </Col>
    </Row>
  );
}
