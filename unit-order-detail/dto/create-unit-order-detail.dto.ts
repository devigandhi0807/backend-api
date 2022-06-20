import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { UnitOrderEntity } from 'src/unit-order/entities/unit-order.entity';
import { DeepPartial } from 'typeorm';

export class CreateUnitOrderDetailDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  Unit_order_id: DeepPartial<UnitOrderEntity>;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  tract_no: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNotEmpty()
  @IsNumberString()
  gross_area_in_acres: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNotEmpty()
  @IsNumberString()
  net_area_in_acres: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNotEmpty()
  @IsNumberString()
  pct_of_unit: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  interest_type: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  ownership_display_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cur_notes: string;

  @ApiProperty()
  @IsString()
  @MinLength(1, {
    message: 'minLength-{"ln":1,"count":1}'
  })
  @MaxLength(5, {
    message: 'maxLength-{"ln":5,"count":5}'
  })
  rec_status: string;
}
