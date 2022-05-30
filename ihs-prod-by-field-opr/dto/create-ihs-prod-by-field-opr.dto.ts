import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';

import { DeepPartial } from 'typeorm';

export class CreateIHSProdByFieldOprDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  user: DeepPartial<UserEntity>;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  summary: string;

  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty()
  @IsString()
  production_id: string;

  @ApiProperty()
  @IsString()
  entity_type: string;

  @ApiProperty()
  @IsString()
  api: string;

  @ApiProperty()
  @IsString()
  lease_name: string;

  @ApiProperty()
  @IsString()
  well_num: string;

  @ApiProperty()
  @IsString()
  operator_name: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  field_name: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  country_name: string;

  @ApiProperty()
  @IsString()
  basin: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  play_name: string;

  @ApiProperty()
  @IsString()
  production_status: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  resv_onshore: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  resv_offshore: string;

  @ApiProperty()
  @IsString()
  lease_code: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  oil_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  gas_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsOptional()
  @IsNumber()
  wtr_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  oil_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  gas_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsOptional()
  @IsNumber()
  wtr_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  oil_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  gas_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsOptional()
  @IsNumber()
  wtr_latest_mo: number;

  @ApiProperty()
  @IsNumber()
  active_num_wells: number;

  @ApiProperty()
  @IsOptional()
  first_prod_date: Date;

  @ApiProperty()
  @IsOptional()
  last_prod_date: Date;

  @ApiProperty()
  @IsNumber()
  td: number;

  @ApiProperty()
  @IsNumber()
  tvd: number;

  @ApiProperty()
  @IsNumber()
  upper_perf: number;

  @ApiProperty()
  @IsNumber()
  lower_perf: number;

  @ApiProperty()
  @IsString()
  oil_gatherer: string;

  @ApiProperty()
  @IsString()
  gas_gatherer: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @IsOptional()
  @IsNumber()
  latitude: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @IsOptional()
  @IsNumber()
  longitude: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  l_and_l_srce: string;

  @ApiProperty()
  @IsString()
  rec_status: string;

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  created_by: string;
}
