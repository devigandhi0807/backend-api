import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional
} from '@nestjs/swagger';

import { Expose, Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';
import { UnitOrderSerializer } from 'src/unit-order/serializer/unit-order.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class UnitOrderDetailSerializer extends ModelSerializer {
  id: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  created_by: UserSerializer;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  updated_by: UserSerializer;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UnitOrderSerializer)
  Unit_order_id: UnitOrderSerializer;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  tract_no: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  gross_area_in_acres: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  net_area_in_acres: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  pct_of_unit: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  interest_type: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  ownership_display_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  cur_notes: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  rec_status: string;

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
