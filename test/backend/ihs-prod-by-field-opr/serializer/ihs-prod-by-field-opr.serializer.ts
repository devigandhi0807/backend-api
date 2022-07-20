import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class IHSProdByFieldOprSerializer extends ModelSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  production_id: string;

  @ApiProperty()
  entity_type: string;

  @ApiProperty()
  api: string;

  @ApiProperty()
  lease_name: string;

  @ApiProperty()
  well_num: string;

  @ApiProperty()
  operator_name: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  field_name: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  county_name: string;

  @ApiProperty()
  basin: string;

  @ApiProperty()
  play_name: string;

  @ApiProperty()
  production_status: string;

  @ApiProperty()
  resv_onshore: string;

  @ApiProperty()
  resv_offshore: string;

  @ApiProperty()
  lease_code: string;

  @ApiProperty()
  oil_cum: number;

  @ApiProperty()
  gas_cum: number;

  @ApiProperty()
  wtr_cum: number;

  @ApiProperty()
  oil_ytd: number;

  @ApiProperty()
  gas_ytd: number;

  @ApiProperty()
  wtr_ytd: number;

  @ApiProperty()
  oil_latest_mo: number;

  @ApiProperty()
  gas_latest_mo: number;

  @ApiProperty()
  wtr_latest_mo: number;

  @ApiProperty()
  active_num_wells: number;

  @ApiProperty()
  first_prod_date: Date;

  @ApiProperty()
  last_prod_date: Date;

  @ApiProperty()
  td: number;

  @ApiProperty()
  tvd: number;

  @ApiProperty()
  upper_perf: number;

  @ApiProperty()
  lower_perf: number;

  @ApiProperty()
  oil_gatherer: string;

  @ApiProperty()
  gas_gatherer: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  l_and_l_srce: string;

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
