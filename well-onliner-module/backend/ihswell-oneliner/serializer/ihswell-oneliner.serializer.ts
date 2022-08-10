import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class IhswellOnelinerSerializer extends ModelSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  uwi: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  api_number: string;

  @ApiProperty()
  ic_number: string;

  @ApiProperty()
  regulatory_api: string;

  @ApiProperty()
  operator_name: string;

  @ApiProperty()
  operator_city: string;

  @ApiProperty()
  current_operator_name: string;

  @ApiProperty()
  current_operator_city: string;

  @ApiProperty()
  lease_name: string;

  @ApiProperty()
  alternate_well_name: string;

  @ApiProperty()
  well_num: string;

  @ApiProperty()
  field_name: string;

  @ApiProperty()
  country_name: string;

  @ApiProperty()
  state_name: string;

  @ApiProperty()
  county_name: string;

  @ApiProperty()
  os_indicator: string;

  @ApiProperty()
  hole_direction: string;

  @ApiProperty()
  final_status: string;

  @ApiProperty()
  current_status: string;

  @ApiProperty()
  regulatory_status: string;

  @ApiProperty()
  regulatory_status_date: Date;

  @ApiProperty()
  basin: string;

  @ApiProperty()
  basin_code: string;

  @ApiProperty()
  sub_basin: string;

  @ApiProperty()
  sub_basin_code: string;

  @ApiProperty()
  play_name: string;

  @ApiProperty()
  play_type: string;

  @ApiProperty()
  permit_number: string;

  @ApiProperty()
  permit_date: Date;

  @ApiProperty()
  permit_status: string;

  @ApiProperty()
  permit_reissue_date: Date;

  @ApiProperty()
  lease_acres: number;

  @ApiProperty()
  unit_of_measure: string;

  @ApiProperty()
  depth_total_driller: number;

  @ApiProperty()
  depth_total_logger: number;

  @ApiProperty()
  depth_true_vertical: number;

  @ApiProperty()
  depth_whipstock: number;

  @ApiProperty()
  class_initial_name: string;

  @ApiProperty()
  class_initial_code: string;

  @ApiProperty()
  class_final_name: string;

  @ApiProperty()
  class_final_code: string;

  @ApiProperty()
  status_final_code: string;

  @ApiProperty()
  formation_projected_name: string;

  @ApiProperty()
  depth_total_projected: number;

  @ApiProperty()
  formation_at_td_name: string;

  @ApiProperty()
  prodfit_formation_at_td_name: string;

  @ApiProperty()
  formation_producing_name: string;

  @ApiProperty()
  prodfit_top_form_prod_name: string;

  @ApiProperty()
  prodfit_base_form_prod_name: string;

  @ApiProperty()
  prodfit_80_degree_heel_pt_form: string;

  @ApiProperty()
  elevation_reference_value: number;

  @ApiProperty()
  elevation_reference_datum: string;

  @ApiProperty()
  ground_elevation: number;

  @ApiProperty()
  elevation_df: number;

  @ApiProperty()
  date_first_spud: Date;

  @ApiProperty()
  date_spud: Date;

  @ApiProperty()
  date_completion: Date;

  @ApiProperty()
  date_rig_release: Date;

  @ApiProperty()
  date_abandonment: Date;

  @ApiProperty()
  date_first_report: Date;

  @ApiProperty()
  date_last_activity: Date;

  @ApiProperty()
  prodfit_update_date: Date;

  @ApiProperty()
  depth_water_value: number;

  @ApiProperty()
  depth_water_datum: string;

  @ApiProperty()
  surface_latitude: number;

  @ApiProperty()
  surface_longitude: number;

  @ApiProperty()
  surface_ll_source: string;

  @ApiProperty()
  proposed_bh_latitude: number;

  @ApiProperty()
  proposed_bh_longitude: number;

  @ApiProperty()
  proposed_bh_ll_source: string;

  @ApiProperty()
  bh_latitude: number;

  @ApiProperty()
  bh_longitude: number;

  @ApiProperty()
  bh_ll_source: string;

  @ApiProperty()
  activity_code: string;

  @ApiProperty()
  permit_filer_long: string;

  @ApiProperty()
  permit_phone: string;

  @ApiProperty()
  rec_status: string;

  @ApiProperty()
  @Type(() => UserSerializer)
  created_by: UserSerializer;

  @ApiProperty()
  @Type(() => UserSerializer)
  updated_by: UserSerializer;

  @ApiPropertyOptional()
  createdAt: Date;

  @ApiPropertyOptional()
  updatedAt: Date;
}
