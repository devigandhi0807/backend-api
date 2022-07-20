import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { Type } from 'class-transformer';
import { UserSerializer } from 'src/auth/serializer/user.serializer';
import { ModelSerializer } from 'src/common/serializer/model.serializer';

export class SonrisWellProfileSerializer extends ModelSerializer {
  id: number;

  @ApiProperty()
  @Type(() => UserSerializer)
  created_by: UserSerializer;

  @ApiProperty()
  @Type(() => UserSerializer)
  updated_by: UserSerializer;

  @ApiProperty()
  operator_name: string;

  @ApiProperty()
  operator_id: string;

  @ApiProperty()
  field_id: string;

  @ApiProperty()
  field_name: string;

  @ApiProperty()
  well_serial_num: string;

  @ApiProperty()
  well_name: string;

  @ApiProperty()
  well_num: string;

  @ApiProperty()
  lease_num: string;

  @ApiProperty()
  well_status_code: string;

  @ApiProperty()
  well_status_code_descr: string;

  @ApiProperty()
  classification: string;

  @ApiProperty()
  api_num: string;

  @ApiProperty()
  effective_date: Date;

  @ApiProperty()
  permit_date: Date;

  @ApiProperty()
  spud_date: Date;

  @ApiProperty()
  well_status_date: Date;

  @ApiProperty()
  section: string;

  @ApiProperty()
  township: string;

  @ApiProperty()
  range: string;

  @ApiProperty()
  meridian: string;

  @ApiProperty()
  parish_code: number;

  @ApiProperty()
  parish_name: string;

  @ApiProperty()
  district_code: number;

  @ApiProperty()
  district_name: string;

  @ApiProperty()
  ground_elevation: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  product_type_code: number;

  @ApiProperty()
  product_type_code_descr: string;

  @ApiProperty()
  usdw_value: number;

  @ApiProperty()
  area_usdw_value: string;

  @ApiProperty()
  source_area_usdw_value: string;

  @ApiProperty()
  rec_status: RecStatusEnum;

  @ApiPropertyOptional()
  createdAt: Date;

  @ApiPropertyOptional()
  updatedAt: Date;
}
