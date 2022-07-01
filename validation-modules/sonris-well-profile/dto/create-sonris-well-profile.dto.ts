import { ApiHideProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsIn,
  IsOptional,
  MaxLength,
  IsDate,
  ValidateIf,
  IsInt,
  Max,
  IsLatitude,
  IsLongitude
} from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { Type } from 'class-transformer';
const statusEnumArray = [RecStatusEnum.ACTIVE, RecStatusEnum.DELETED];
export class CreateSonrisWellProfileDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  operator_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  operator_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  field_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, { message: 'maxLength-{"ln":40,"count":40}' })
  field_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  well_serial_num: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  well_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  well_num: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  lease_num: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5, { message: 'maxLength-{"ln":5,"count":5}' })
  well_status_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, { message: 'maxLength-{"ln":30,"count":30}' })
  well_status_code_descr: string;

  @IsNotEmpty()
  @IsString()
  classification: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5, { message: 'maxLength-{"ln":5,"count":5}' })
  well_class_type_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, { message: 'maxLength-{"ln":30,"count":30}' })
  well_class_type_code_descr: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  api_num: string;

  @IsDate()
  @Type(() => Date)
  effective_date: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  permit_date: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  spud_date: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  well_status_date: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  section: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  township: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  range: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  meridian: string;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(9999, { message: 'max-{"dg":4}' })
  @Type(() => Number)
  parish_code: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  parish_name: string;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(9999, { message: 'max-{"dg":4}' })
  @Type(() => Number)
  district_code: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  district_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  ground_elevation: string;

  @IsNotEmpty()
  @IsLatitude()
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  longitude: number;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(9999, { message: 'max-{"dg":4}' })
  @Type(() => Number)
  product_type_code: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  product_type_code_descr: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  usdw_value: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  area_usdw_value: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  source_area_usdw_value: string;

  @IsIn(statusEnumArray, {
    message: `isIn-{"items":"${statusEnumArray.join(',')}"}`
  })
  rec_status: RecStatusEnum;
}
