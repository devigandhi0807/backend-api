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
export class IHSProdHeaderSerializer extends ModelSerializer {
  id: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  entity: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  api: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  source: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  entity_type: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  primary_product: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  country_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  province_state_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  district_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  county_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  os_indicator: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  basin: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  operator_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  operator_city: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  field_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  prod_zone_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lease_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lease_number: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  well_num: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  location: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  gatherer_gas: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  gatherer_gas_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  gatherer_liquid: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  gatherer_liquid_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  status_date: Date;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  status_current_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  date_production_start: Date;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  date_production_stop: Date;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  date_injection_start: Date;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  date_injection_stop: Date;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  pool_name: string;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  temperature_gradient: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  n_factor: string;

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
