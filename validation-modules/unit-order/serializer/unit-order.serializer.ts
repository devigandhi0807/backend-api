import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';

export const basicFieldGroupsForSerializing: string[] = ['basic'];
export const ownerFieldGroupsForSerializing: string[] = ['owner'];
export class UnitOrderSerializer extends ModelSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  operator_name: string;

  @ApiProperty()
  county_name: string[];

  @ApiProperty()
  section: string;

  @ApiProperty()
  township: string;

  @ApiProperty()
  range: string;

  @ApiProperty()
  unit_order_link: string;

  @ApiProperty()
  State: string;

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
