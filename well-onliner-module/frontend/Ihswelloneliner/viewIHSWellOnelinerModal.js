import React, { useEffect } from 'react';
import { Modal, List, Typography, Row, Col, Divider } from 'antd';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeInitialValuesSelector } from 'containers/Ihswelloneliner/selectors';
import moment from 'moment-timezone';
import commonMessage from 'common/messages';

const stateSelector = createStructuredSelector({
  initialValues: makeInitialValuesSelector(),
});

const ViewIHSWellOneLinerModal = ({ onCancel, visible }) => {
  const intl = useIntl();

  const { initialValues } = useSelector(stateSelector);
  const onCancelModal = () => {
    onCancel();
  };

  useEffect(() => visible, [initialValues]);

  return (
    <Modal
      title={'ihswelloneliner #' + `${initialValues.id}`}
      visible={visible}
      onOk={onCancelModal}
      onCancel={onCancelModal}
      okText={intl.formatMessage(commonMessage.okLabel)}
      cancelText="Close"
      width={960}
    >
      <Row>
        <Col span={11}>
          <List bordered>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>UWI:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.uwi}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Source:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.source}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>API Number:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.api_number}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>IC Number:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.ic_number}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Regulatory API:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.regulatory_api}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Operator Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.operator_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Operator City:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.operator_city}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Current Operator Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.current_operator_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Current Operator City:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.current_operator_city}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Lease Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.lease_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Alternate Well Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.alternate_well_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Well Num:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.well_num}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Field Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.field_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Country Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.country_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>State Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.state_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>County Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.county_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>OS Indicator:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.os_indicator}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Hole Direction:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.hole_direction}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Final Status:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.final_status}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Current Status:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.current_status}</Col>
              </Row>
            </List.Item>

            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Regulatory Status:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.regulatory_status}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Regulatory Status Date:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.regulatory_status_date).format(
                    'DD-MM-YYYY',
                  )}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Basin:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.basin}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Basin Code:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.basin_code}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Sub Basin:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.sub_basin}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Sub Basin Code:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.sub_basin_code}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Play Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.play_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Play Type:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.play_type}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Permit Number:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.permit_number}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Permit Date:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.permit_date).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>

            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Permit Status:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.permit_status}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Permit Status Date:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.permit_reissue_date).format(
                    'DD-MM-YYYY',
                  )}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Lease Acres:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.lease_acres}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Unit of Measure:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.unit_of_measure}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth Total Driller:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_total_driller}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth Total Logger:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_total_logger}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth True Vertical:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_true_vertical}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth Whipstock:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_whipstock}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Class Initial Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.class_initial_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Class Initial Code:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.class_initial_code}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Class Final Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.class_final_name}</Col>
              </Row>
            </List.Item>
          </List>
        </Col>

        <Col span={11} offset={1}>
          <List bordered>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Class Final Code:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.class_final_code}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Status Final Code:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.status_final_code}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Formation Projected Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.formation_projected_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth Total Projected:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_total_projected}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Formation at TD Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.formation_at_td_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Prodfit Formation at TD Name:</b>{' '}
                </Col>
                <Col span={12}>
                  {initialValues.prodfit_formation_at_td_name}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Formation Producing Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.formation_producing_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Prodfit Top Form Prod Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.prodfit_top_form_prod_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Prodfit Base Form Prod Name:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.prodfit_base_form_prod_name}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Prodfit 80 Degree Heel PT Form:</b>{' '}
                </Col>
                <Col span={12}>
                  {initialValues.prodfit_80_degree_heel_pt_form}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Elevation Reference Value:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.elevation_reference_value}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Elevation Reference Datum:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.elevation_reference_datum}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Ground Elevation:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.ground_elevation}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Elevation DF:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.elevation_df}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date First Spud:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_first_spud).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date Spud:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_spud).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date Completion:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_completion).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date Rig Release:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_rig_release).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date Abandonment:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_abandonment).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date First Report:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_first_report).format('DD-MM-YYYY')}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Date Last Activity:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.date_last_activity).format(
                    'DD-MM-YYYY',
                  )}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Prodfit Update Date:</b>{' '}
                </Col>
                <Col span={12}>
                  {moment(initialValues.prodfit_update_date).format(
                    'DD-MM-YYYY',
                  )}
                </Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth Water Value:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_water_value}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Depth Water Datum:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.depth_water_datum}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Surface Latitude:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.surface_latitude}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Surface Longitude:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.surface_longitude}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Surface LL Source:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.surface_ll_source}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Proposed BH Latitude:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.proposed_bh_latitude}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Proposed BH Longitude:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.proposed_bh_longitude}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Proposed BH LL Source:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.proposed_bh_ll_source}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>BH Latitude:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.bh_latitude}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>BH Longitude:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.bh_longitude}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>BH LL Source:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.bh_ll_source}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Activity Code:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.activity_code}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Permit Filer Long:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.permit_filer_long}</Col>
              </Row>
            </List.Item>
            <List.Item>
              <Row style={{ width: '100%' }}>
                <Col span={8}>
                  <b>Permit Phone:</b>{' '}
                </Col>
                <Col span={12}>{initialValues.permit_phone}</Col>
              </Row>
            </List.Item>
          </List>
        </Col>
      </Row>
    </Modal>
  );
};

ViewIHSWellOneLinerModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default ViewIHSWellOneLinerModal;
