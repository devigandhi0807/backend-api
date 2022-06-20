import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';

export class CreateUnitOrderDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  operator_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  county_name: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  section: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  township: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  range: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'minLength-{"ln":2,"count":2}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  unit_order_link: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1, {
    message: 'minLength-{"ln":1,"count":1}'
  })
  @MaxLength(2, {
    message: 'maxLength-{"ln":2,"count":2}'
  })
  State: string;

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
