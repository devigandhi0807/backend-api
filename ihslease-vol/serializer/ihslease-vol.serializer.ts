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
export class IHSLeaseVolSerializer extends ModelSerializer {
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
  map_symbol: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  source: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  primary_api: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  lease_name: string;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  well_num: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  //@Transform(() => DecimalToString, { toPlainOnly: true })
  gas_cum: number;

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
  gas_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @Expose({ groups: basicFieldGroupsForSerializing })
  oil_ytd: number;

  @ApiProperty()
  @Expose({ groups: basicFieldGroupsForSerializing })
  rec_status: string;

  // @ApiHideProperty()
  // @Expose({ groups: basicFieldGroupsForSerializing })
  // created_by: string;

  // @ApiHideProperty()
  // @Expose({ groups: basicFieldGroupsForSerializing })
  // updated_by: string;

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
