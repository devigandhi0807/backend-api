/**
 *
 * Asynchronously loads the component for Ihswelloneliners
 *
 */

import React from 'react';
import loadable from 'utils/loadable';
import { Space, Skeleton, Row, Col } from 'antd';

export default loadable(() => import('./index'), {
  fallback: (
    <Row>
      <Col span={24}>
        <Space>
          <Skeleton.Input style={{ width: 200 }} active size="default" />
          <Skeleton.Input style={{ width: 200 }} active size="default" />
          <Skeleton.Input style={{ width: 200 }} active size="default" />
          <Skeleton.Input style={{ width: 200 }} active size="default" />
          <Skeleton.Input style={{ width: 200 }} active size="default" />
        </Space>
        <Space direction="vertical">
          <Skeleton.Input style={{ width: 1000 }} active size="default" />
          <Skeleton.Input style={{ width: 1000 }} active size="default" />
          <Skeleton.Input style={{ width: 1000 }} active size="default" />
          <Skeleton.Input style={{ width: 1000 }} active size="default" />
          <Skeleton.Input style={{ width: 1000 }} active size="default" />
        </Space>
      </Col>
    </Row>
  ),
});
