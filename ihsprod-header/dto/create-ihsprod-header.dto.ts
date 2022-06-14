import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidationArguments
} from 'class-validator';

import { UserEntity } from 'src/auth/entity/user.entity';

import { DeepPartial } from 'typeorm';

export class CreateIHSProdHeaderDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  entity: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  api: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  source: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  entity_type: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  primary_product: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  country_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  province_state_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  district_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  county_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  os_indicator: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  basin: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  operator_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  operator_city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  field_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  prod_zone_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  lease_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0, {
    message: (args: ValidationArguments) => {
      if (args.value < 0) {
        return 'min-{"ln":0}';
      }
    }
  })
  @Max(9999999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 9999999999) {
        return 'max-{"dg":10}';
      }
    }
  })
  lease_number: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  well_num: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gatherer_gas: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gatherer_gas_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  gatherer_liquid: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gatherer_liquid_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  status_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  status_current_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_production_start: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_production_stop: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_injection_start: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_injection_stop: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  pool_name: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @IsNotEmpty()
  @MinLength(2, {
    message: 'minDigit-{"dg":2}'
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 6) {
          return 'maxDigitW(+ve)(10,4)-{"dg":6,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 4) {
          return 'maxDigitP(+ve)(10,4)-{"dg":4,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 7) {
          return 'maxDigitW(-ve)(10,4)-{"dg":7,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 4) {
          return 'maxDigitP(-ve)(10,4)-{"dg":4,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  temperature_gradient: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  n_factor: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1, {
    message: 'minLength-{"ln":1,"count":1}'
  })
  @MaxLength(5, {
    message: 'maxLength-{"ln":5,"count":5}'
  })
  rec_status: string;
}
