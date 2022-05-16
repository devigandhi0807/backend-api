import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';

export class CreateIHSLeaseVolDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  user: DeepPartial<UserEntity>;

  @ApiProperty()
  @IsString()
  map_symbol: string;

  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty()
  @IsString()
  primary_api: string;

  @ApiProperty()
  @IsString()
  lease_name: string;

  @ApiProperty()
  @IsString()
  well_num: string;
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
  @IsNumber()
  oil_cum: number;

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
  @IsNumber()
  oil_ytd: number;

  @ApiProperty()
  @IsString()
  rec_status: string;

  @ApiProperty()
  @IsString()
  created_by: string;

  @ApiProperty()
  @IsString()
  updated_by: string;
}
