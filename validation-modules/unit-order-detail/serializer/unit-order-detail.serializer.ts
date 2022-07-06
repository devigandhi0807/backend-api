import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';
import { UnitOrderSerializer } from 'src/unit-order/serializer/unit-order.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class UnitOrderDetailSerializer extends ModelSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Type(() => UserSerializer)
  created_by: UserSerializer;

  @ApiProperty()
  @Type(() => UserSerializer)
  updated_by: UserSerializer;

  @ApiProperty()
  @Type(() => UnitOrderSerializer)
  Unit_order_id: UnitOrderSerializer;

  @ApiProperty()
  tract_no: string;

  @ApiProperty()
  gross_area_in_acres: number;

  @ApiProperty()
  net_area_in_acres: number;

  @ApiProperty()
  pct_of_unit: number;

  @ApiProperty()
  interest_type: number;

  @ApiProperty()
  ownership_display_name: string;

  @ApiProperty()
  cur_notes: string;

  @ApiProperty()
  rec_status: string;

  @ApiPropertyOptional()
  createdAt: Date;

  @ApiPropertyOptional()
  updatedAt: Date;
}
