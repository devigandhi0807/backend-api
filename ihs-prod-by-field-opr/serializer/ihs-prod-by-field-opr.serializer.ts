import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional
} from '@nestjs/swagger';

import { Expose, Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class IHSProdByFieldOprSerializer extends ModelSerializer {
  id: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  summary: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  source: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  production_id: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  entity_type: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  api: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lease_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  well_num: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  operator_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  location: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  field_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  state: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  country_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  basin: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  play_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  production_status: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  resv_onshore: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  resv_offshore: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lease_code: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  oil_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  gas_cum: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  wtr_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  oil_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  gas_ytd: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  wtr_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  oil_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  gas_latest_mo: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  wtr_latest_mo: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  active_num_wells: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  first_prod_date: Date;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  last_prod_date: Date;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  td: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  tvd: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  upper_perf: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lower_perf: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  oil_gatherer: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  gas_gatherer: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  latitude: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  longitude: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  l_and_l_srce: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  rec_status: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  created_by: UserSerializer;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  updated_by: UserSerializer;

  @ApiPropertyOptional()
  @Expose({
    groups: basicFieldGroupsForSerializing
  })
  createdAt: Date;

  @ApiPropertyOptional()
  @Expose({
    groups: basicFieldGroupsForSerializing
  })
  updatedAt: Date;
}
