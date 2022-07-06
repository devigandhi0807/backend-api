import { ApiHideProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { DeepPartial } from 'typeorm';
const statusEnumArray = [RecStatusEnum.ACTIVE, RecStatusEnum.DELETED];
export class CreateUnitOrderDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  operator_name: string;

  @IsNotEmpty()
  @IsString({ each: true })
  county_name: string[];

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
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  unit_order_link: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2, { message: 'maxLength-{"ln":2,"count":2}' })
  State: string;

  @IsIn(statusEnumArray, {
    message: `isIn-{"items":"${statusEnumArray.join(',')}"}`
  })
  rec_status: RecStatusEnum;
}
