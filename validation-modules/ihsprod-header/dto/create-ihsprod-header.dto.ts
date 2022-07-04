import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsIn,
  IsInt,
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

export class CreateIHSProdHeaderDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  entity: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  api: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  source: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  entity_type: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  primary_product: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  country_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  province_state_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  district_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  county_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  os_indicator: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  basin: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  operator_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  operator_city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  field_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  prod_zone_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  lease_name: string;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((object, value) => value)
  @IsInt({ message: 'isInt' })
  @Max(9999999999, { message: 'max-{"dg":9999999999}' })
  @Type(() => Number)
  lease_number: number;

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
  location: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gatherer_gas: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gatherer_gas_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  gatherer_liquid: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gatherer_liquid_name: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  // @Matches(
  //   /^([0-9]{4}|[0-9]{2})[-]([0]?[1-9]|[1][0-2])[-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
  //   {
  //     message: 'isDate'
  //   }
  // )
  status_date: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  status_current_name: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_production_start: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_production_stop: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_injection_start: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_injection_stop: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, { message: 'maxLength-{"ln":20,"count":20}' })
  pool_name: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 4 }, { message: 'isDigP-{"dg":4}' })
  @Max(999999.9999, { message: 'max-{"dg":999999.9999}' })
  @Type(() => Number)
  temperature_gradient: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  n_factor: string;

  @IsNotEmpty()
  @IsIn(statusEnumArray, {
    message: `isIn-{"items":"${statusEnumArray.join(',')}"}`
  })
  rec_status: RecStatusEnum;
}
