import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsIn,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  ValidateIf
} from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
const statusEnumArray = [RecStatusEnum.ACTIVE, RecStatusEnum.DELETED];
import { DeepPartial } from 'typeorm';

export class CreateIHSProdByFieldOprDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  summary: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  source: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  production_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  entity_type: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  api: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  lease_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  well_num: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  operator_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  location: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  field_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  state: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  county_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  basin: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  play_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  production_status: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  resv_onshore: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  resv_offshore: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  lease_code: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  oil_cum: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  gas_cum: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  wtr_cum: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  oil_ytd: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  gas_ytd: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  wtr_ytd: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  oil_latest_mo: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  gas_latest_mo: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  wtr_latest_mo: number;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(9999, { message: 'max-{"dg":4}' })
  @Type(() => Number)
  active_num_wells: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  first_prod_date: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  last_prod_date: Date;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(99999999, { message: 'max-{"dg":8}' })
  @Type(() => Number)
  td: number;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(99999999, { message: 'max-{"dg":8}' })
  @Type(() => Number)
  tvd: number;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(99999999, { message: 'max-{"dg":8}' })
  @Type(() => Number)
  upper_perf: number;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(99999999, { message: 'max-{"dg":8}' })
  @Type(() => Number)
  lower_perf: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  oil_gatherer: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gas_gatherer: string;

  @IsNotEmpty()
  @IsLatitude()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 8 }, { message: 'isDigP-{"dg":8}' })
  latitude: number;

  @IsLongitude()
  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 8 }, { message: 'isDigP-{"dg":8}' })
  longitude: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  l_and_l_srce: string;

  @IsIn(statusEnumArray, {
    message: `isIn-{"items":"${statusEnumArray.join(',')}"}`
  })
  rec_status: RecStatusEnum;
}
