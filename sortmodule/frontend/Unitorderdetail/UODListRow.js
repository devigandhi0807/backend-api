import React from 'react';
import { Col, Modal, Row, Button } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import commonMessages from 'common/messages';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { interestType } from 'common/data';
const interestTypeArray = interestType;
export default function UODListRow({
  unitorderdetail,
  handleEditClick,
  handleDeleteClick,
}) {
  const intl = useIntl();
  const result = interestTypeArray.filter(el => {
				return el['id'] == unitorderdetail.interest_type;
			   });
  return (
    <Row key={'detail' + unitorderdetail.id} className="truthy-dynamic-body">
      <Col key={'detail_tract_no_' + unitorderdetail.id}>
        <div>{unitorderdetail.tract_no}</div>
      </Col>
	  <Col style={{width:'20%'}} key={'detail_ownership_display_name' + unitorderdetail.id}>
        <div>{unitorderdetail.ownership_display_name}</div>
      </Col>
      
	 
      <Col key={'detail_gross_area_in_acres' + unitorderdetail.id}>
        <div>{unitorderdetail.gross_area_in_acres}</div>
      </Col>
      <Col key={'detail_net_area_in_acres' + unitorderdetail.id}>
        <div>{unitorderdetail.net_area_in_acres}</div>
      </Col>
      <Col key={'detail_pct_of_unit' + unitorderdetail.id}>
        <div>{unitorderdetail.pct_of_unit}</div>
      </Col>
	   <Col key={'detail_interest_type' + unitorderdetail.id}>
        <div>
		<>
			
		</>	
			{ result[0].label }</div>
      </Col>
      
      
     
      <Col className="actionbtn" key={'detail_action_' + unitorderdetail.id} style={{width:'18%'}}>
        <div>
          <Button
            className="btn-sm-primary"
            key={'detail_update_' + unitorderdetail.id}
            onClick={(event) => handleEditClick(event, unitorderdetail)}
          >
            Edit
          </Button>
          <Button
            key={'detail_delete_' + unitorderdetail.id}
            onClick={() => {
              Modal.confirm({
                okText: intl.formatMessage(commonMessages.yesLabel),
                okType: 'danger',
                cancelText: intl.formatMessage(commonMessages.noLabel),
                icon: <ExclamationCircleOutlined />,
                title: intl.formatMessage(commonMessages.confirmationMessage),
                onOk: (close) =>
                   handleDeleteClick(unitorderdetail.id, close),
              });
            }}
          >
            Delete
          </Button>
        </div>
      </Col>
    </Row>
  );
}
