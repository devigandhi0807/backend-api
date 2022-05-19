import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';

export class CreateIHSMonthProdDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  user: DeepPartial<UserEntity>;

  @ApiProperty()
  @IsString()
  entity: string;

  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty()
  @IsString()
  entity_type: string;

  @ApiProperty()
  @IsString()
  primary_product: string;

  @ApiProperty()
  @IsString()
  lease_name: string;

  @ApiProperty()
  @IsString()
  well_num: string;

  @ApiProperty()
  @IsString()
  api: string;

  @ApiProperty()
  @IsString()
  regulatory_api: string;

  @ApiProperty()
  @IsString()
  operator_name: string;

  @ApiProperty()
  @IsNumber()
  year: number;

  @ApiProperty()
  @IsString()
  month: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  liquid: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  gas: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNumber()
  water: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @IsNumber()
  ratio_gas_oil: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @IsNumber()
  percent_water: number;

  @ApiProperty()
  @IsNumber()
  wells: number;

  @ApiProperty()
  @IsNumber()
  days_on: number;

  @ApiProperty()
  @IsString()
  rec_status: string;

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  created_by: string;
}
