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
export class UnitOrderSerializer extends ModelSerializer {
  id: number;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  created_by: UserSerializer;

  @ApiHideProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  @Type(() => UserSerializer)
  updated_by: UserSerializer;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  operator_name: string;

  @ApiProperty({
    required: true,
    type: String,
    isArray: true
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  county_name: string[];

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  section: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  //@Transform(() => DecimalToString, { toPlainOnly: true })
  township: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  range: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  unit_order_link: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  State: string;

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
