import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsIn,
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

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'maxLength-{"ln":10,"count":10}' })
  tract_no: string;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 4 }, { message: 'isDigP-{"dg":4}' })
  @Max(999999.9999, { message: 'max-{"dg":999999.9999}' })
  @Type(() => Number)
  gross_area_in_acres: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 4 }, { message: 'isDigP-{"dg":4}' })
  @Max(999999.9999, { message: 'max-{"dg":999999.9999}' })
  @Type(() => Number)
  net_area_in_acres: number;

  @IsNotEmpty()
  @ValidateIf((object, value) => value)
  @IsNumber({ maxDecimalPlaces: 8 }, { message: 'isDigP-{"dg":8}' })
  @Max(9999.99999999, { message: 'max-{"dg":9999.99999999}' })
  @Type(() => Number)
  pct_of_unit: number;

  @IsNotEmpty()
  @IsNumber()
  interest_type: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80, { message: 'maxLength-{"ln":80,"count":80}' })
  ownership_display_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500, { message: 'maxLength-{"ln":500,"count":500}' })
  cur_notes: string;

  @IsIn(statusEnumArray, {
    message: `isIn-{"items":"${statusEnumArray.join(',')}"}`
  })
  rec_status: RecStatusEnum;
}
