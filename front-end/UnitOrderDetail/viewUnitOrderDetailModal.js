import React, { useEffect } from 'react';
import { Modal, List, Row, Col } from 'antd';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import commonMessage from 'common/messages';
import messages from 'containers/UnitOrderDetail/messages';
import { queryUnitOrderDetailAction } from 'containers/UnitOrderDetail/actions';
import {
  makeIsLoadingSelector,
  makeUnitOrderDetailSelector,
} from 'containers/UnitOrderDetail/selectors';

const stateSelector = createStructuredSelector({
  viewUODetail: makeUnitOrderDetailSelector(),
  isLoading: makeIsLoadingSelector(),
});

function ViewUnitOrderDetailModal({ visible, onCancel }) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { viewUODetail, isLoading } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(queryUnitOrderDetailAction());
  }, []);
  useEffect(() => visible, []);
  const onCancelModal = () => {
    onCancel();
  };
  return (
    <Modal
      title={`${intl.formatMessage(messages.listTitle)}-${viewUODetail.id}`}
      visible={visible}
      onOk={onCancelModal}
      onCancel={onCancelModal}
      okText={intl.formatMessage(commonMessage.okLabel)}
      cancelText="Close"
      width={960}
    >
      <Row onLoad={isLoading}>
        <Col span={11}>
          <List bordered>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b> Tract No:</b>
                </Col>
                <Col span={12}>{viewUODetail.tract_no}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Unit Order Id:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.Unit_order_id}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Gross Area in Acres:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.gross_area_in_acres}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Net Area in Acres:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.net_area_in_acres}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>PCT of Unit:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.pct_of_unit}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Interest Type:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.interest_type}</Col>
              </Row>
            </List.Item>
          </List>
        </Col>

        <Col span={11} offset={1}>
          <List bordered>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Ownership Display Name:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.ownership_display_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Rec Status:</b>{' '}
                </Col>
                <Col span={12}>{viewUODetail.rec_status}</Col>
              </Row>
            </List.Item>
          </List>
        </Col>
      </Row>
    </Modal>
  );
}

ViewUnitOrderDetailModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default ViewUnitOrderDetailModal;
