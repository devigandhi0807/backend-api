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
export class IHSMonthProdSerializer extends ModelSerializer {
  id: number;

  @ApiHideProperty()
  @Expose({ groups: ownerFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  user: UserSerializer;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  entity: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  source: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  entity_type: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  primary_product: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lease_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  well_num: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  api: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  regulatory_api: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  operator_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  year: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  month: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  liquid: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  gas: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  water: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  ratio_gas_oil: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  percent_water: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  wells: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  days_on: number;

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
