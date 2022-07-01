import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class IHSProdHeaderSerializer extends ModelSerializer {
  id: number;

  @ApiProperty()
  entity: string;

  @ApiProperty()
  api: string;

  @ApiProperty()
  source: string;

  @ApiProperty()
  entity_type: string;

  @ApiProperty()
  primary_product: string;

  @ApiProperty()
  country_name: string;

  @ApiProperty()
  province_state_name: string;

  @ApiProperty()
  district_name: string;

  @ApiProperty()
  county_name: string;

  @ApiProperty()
  os_indicator: string;

  @ApiProperty()
  basin: string;

  @ApiProperty()
  operator_name: string;

  @ApiProperty()
  operator_city: string;

  @ApiProperty()
  field_name: string;

  @ApiProperty()
  prod_zone_name: string;

  @ApiProperty()
  lease_name: string;

  @ApiProperty()
  lease_number: number;

  @ApiProperty()
  well_num: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  gatherer_gas: string;

  @ApiProperty()
  gatherer_gas_name: string;

  @ApiProperty()
  gatherer_liquid: string;

  @ApiProperty()
  gatherer_liquid_name: string;

  @ApiProperty()
  status_date: Date;

  @ApiProperty()
  status_current_name: string;

  @ApiProperty()
  date_production_start: Date;

  @ApiProperty()
  date_production_stop: Date;

  @ApiProperty()
  date_injection_start: Date;

  @ApiProperty()
  date_injection_stop: Date;

  @ApiProperty()
  pool_name: string;

  @ApiProperty()
  temperature_gradient: number;

  @ApiProperty()
  n_factor: string;

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
