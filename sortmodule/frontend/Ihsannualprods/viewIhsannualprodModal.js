import React, { useEffect } from 'react';
import { Drawer, List, Typography, Row, Col, Divider, Space, Button  } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import {
  clearFormAction,
  setFormValues,
  submitFormAction,
} from 'containers/Ihsannualprods/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormFieldSelector,
  makeErrorSelector,
  makeInitialValuesSelector,
} from 'containers/Ihsannualprods/selectors';
import { makeDeviceSelector } from 'containers/App/selectors';
import commonMessage from 'common/messages';
import messages from 'containers/Ihsannualprods/messages';

const stateSelector = createStructuredSelector({
  errors: makeErrorSelector(),
  device: makeDeviceSelector(),
  initialValues: makeInitialValuesSelector(),
});

const ViewIhsannualprodModal = ({ onClose, visible }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { errors, device, initialValues } =
    useSelector(stateSelector);

 
/*  const onCancelModal = () => {
    onClose();
  };*/



  useEffect(() => visible , [initialValues]);

  return (
    <Drawer type="info"
      title={"Ihsannualprod #"+`${initialValues.id}`}
      visible={visible}
      onClose={onClose}
	  width={960}
	  extra={
          <Space>
            <Button onClick={onClose}>{intl.formatMessage(commonMessage.okLabel)}</Button>
          </Space>
        }
    >
	
	<Row>
      <Col span={11} >
	  <List bordered>
	    <List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Entity:</b> </Col>
			<Col span={12}>{initialValues.entity}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Source:</b> </Col>
			<Col span={12}>{initialValues.source}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Source:</b> </Col>
			<Col span={12}>{initialValues.source}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Entity type:</b> </Col>
			<Col span={12}>{initialValues.entity_type}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Primary product:</b> </Col>
			<Col span={12}>{initialValues.primary_product}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Lease name:</b> </Col>
			<Col span={12}>{initialValues.lease_name}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Well num:</b> </Col>
			<Col span={12}>{initialValues.well_num}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Api:</b> </Col>
			<Col span={12}>{initialValues.api}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Regulatory Api:</b> </Col>
			<Col span={12}>{initialValues.regulatory_api}</Col>
		</Row>
        </List.Item>
		</List>
       </Col>
	  
	     <Col span={11} offset={1} >
		 <List bordered>
		 <List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Year val:</b> </Col>
			<Col span={12}>{initialValues.year_val}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Annual liquid:</b> </Col>
			<Col span={12}>{initialValues.annual_liquid}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Annual gas:</b> </Col>
			<Col span={12}>{initialValues.annual_gas}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Annual water:</b> </Col>
			<Col span={12}>{initialValues.annual_water}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Prior cum gas:</b> </Col>
			<Col span={12}>{initialValues.prior_cum_gas}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Prior cum liquid:</b> </Col>
			<Col span={12}>{initialValues.prior_cum_liquid}</Col>
		</Row>
        </List.Item>
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Prior cum water:</b> </Col>
			<Col span={12}>{initialValues.prior_cum_water}</Col>
		</Row>
        </List.Item>
		{(initialValues.created_by != null) ?
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Created by:</b> </Col>
			<Col span={12}>{initialValues.created_by['name']} at <b>
			
			<FormattedMessage
              {...messages.createdAt}
              values={{ ts: Date.parse(initialValues.createdAt) }}
            />
			</b></Col>
		</Row>
        </List.Item> : null
		}
				{(initialValues.updated_by != null) ?
		<List.Item>
		<Row style={{width:'100%'}}>
			<Col span={8}><b>Updated by:</b> </Col>
			<Col span={12}>{initialValues.updated_by['name']} at <b>
			
			<FormattedMessage
              {...messages.updatedAt}
              values={{ ts: Date.parse(initialValues.updatedAt) }}
            />
			</b>

</Col>
		</Row>
        </List.Item> : null
		}
		

			
		
		
		
	  </List>
	  
	  
		</Col>
  
       
     
    </Row>
	
	
		
		
	
	
	
         
    </Drawer>
  );
};

ViewIhsannualprodModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default ViewIhsannualprodModal;
