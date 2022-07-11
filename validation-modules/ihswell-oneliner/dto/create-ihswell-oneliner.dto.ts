import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Validate,
  ValidateIf
} from 'class-validator';

import { UserEntity } from 'src/auth/entity/user.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { UniqueValidatorPipe } from 'src/common/pipes/unique-validator.pipe';
const statusEnumArray = [RecStatusEnum.ACTIVE, RecStatusEnum.DELETED];
import { DeepPartial } from 'typeorm';
import { IhswellOnelinerEntity } from '../entities/ihswell-oneliner.entity';

export class CreateIhswellOnelinerDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  @Validate(UniqueValidatorPipe, [IhswellOnelinerEntity], {
    message: 'already taken'
  })
  uwi: string;

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
  @Validate(UniqueValidatorPipe, [IhswellOnelinerEntity], {
    message: 'already taken'
  })
  api_number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  ic_number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  @Validate(UniqueValidatorPipe, [IhswellOnelinerEntity], {
    message: 'already taken'
  })
  regulatory_api: string;

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
  current_operator_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  current_operator_city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  lease_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  alternate_well_name: string;

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
  field_name: string;

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
  state_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  county_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  os_indicator: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  hole_direction: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  final_status: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  current_status: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  regulatory_status: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  regulatory_status_date: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  basin: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  basin_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  sub_basin: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  sub_basin_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  play_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60, {
    message: 'maxLength-{"ln":60,"count":60}'
  })
  play_type: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  permit_number: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  permit_date: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  permit_status: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  permit_reissue_date: Date;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  lease_acres: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  unit_of_measure: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  depth_total_driller: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  depth_total_logger: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  depth_true_vertical: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  depth_whipstock: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  class_initial_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5, {
    message: 'maxLength-{"ln":5,"count":5}'
  })
  class_initial_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  class_final_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5, {
    message: 'maxLength-{"ln":5,"count":5}'
  })
  class_final_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5, {
    message: 'maxLength-{"ln":5,"count":5}'
  })
  status_final_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  formation_projected_name: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  depth_total_projected: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  formation_at_td_name: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  prodfit_formation_at_td_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  formation_producing_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  prodfit_top_form_prod_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  prodfit_base_form_prod_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  prodfit_80_degree_heel_pt_form: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  elevation_reference_value: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  elevation_reference_datum: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  ground_elevation: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  elevation_df: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_first_spud: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_spud: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_completion: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_rig_release: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_abandonment: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_first_report: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  date_last_activity: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  prodfit_update_date: Date;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'isDigP-{"dg":2}' })
  @Max(99999999.99, { message: 'max-{"dg":99999999.99}' })
  @Type(() => Number)
  depth_water_value: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  depth_water_datum: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 10 }, { message: 'isDigP-{"dg":10}' })
  @Max(999999.9999999999, { message: 'max-{"dg":999999.9999999999}' })
  @Type(() => Number)
  surface_latitude: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 10 }, { message: 'isDigP-{"dg":10}' })
  @Max(999999.9999999999, { message: 'max-{"dg":999999.9999999999}' })
  @Type(() => Number)
  surface_longitude: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  surface_ll_source: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 10 }, { message: 'isDigP-{"dg":10}' })
  @Max(999999.9999999999, { message: 'max-{"dg":999999.9999999999}' })
  @Type(() => Number)
  proposed_bh_latitude: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 10 }, { message: 'isDigP-{"dg":10}' })
  @Max(999999.9999999999, { message: 'max-{"dg":999999.9999999999}' })
  @Type(() => Number)
  proposed_bh_longitude: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  proposed_bh_ll_source: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 10 }, { message: 'isDigP-{"dg":10}' })
  @Max(999999.9999999999, { message: 'max-{"dg":999999.9999999999}' })
  @Type(() => Number)
  bh_latitude: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 10 }, { message: 'isDigP-{"dg":10}' })
  @Max(999999.9999999999, { message: 'max-{"dg":999999.9999999999}' })
  @Type(() => Number)
  bh_longitude: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  bh_ll_source: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5, {
    message: 'maxLength-{"ln":5,"count":5}'
  })
  activity_code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {
    message: 'maxLength-{"ln":100,"count":100}'
  })
  permit_filer_long: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(25, {
    message: 'maxLength-{"ln":25,"count":25}'
  })
  permit_phone: string;

  @IsNotEmpty()
  @IsIn(statusEnumArray, {
    message: `isIn-{"items":"${statusEnumArray.join(',')}"}`
  })
  rec_status: RecStatusEnum;
}
