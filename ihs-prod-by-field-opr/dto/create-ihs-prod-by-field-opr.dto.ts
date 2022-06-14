import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsLatitude,
  IsLongitude,
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

export class CreateIHSProdByFieldOprDto {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  created_by: DeepPartial<UserEntity>;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  summary: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  source: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  production_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  entity_type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  api: string;

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
  @IsString()
  @MinLength(3, {
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
  operator_name: string;

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
  field_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  country_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
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
  play_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(30, {
    message: 'maxLength-{"ln":30,"count":30}'
  })
  production_status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  resv_onshore: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(40, {
    message: 'maxLength-{"ln":40,"count":40}'
  })
  resv_offshore: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  lease_code: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  oil_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  gas_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  wtr_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  oil_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  gas_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  wtr_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: 'minDigit-{"dg":2}'
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  oil_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  gas_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
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
        if (args.value.split('.')[0].length > 8) {
          return 'maxDigitW(+ve)(10,2)-{"dg":8,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(+ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return 'maxDigitW(-ve)(10,2)-{"dg":9,"org":' + args.value + '}';
        }
        if (args.value.split('.')[1].length > 2) {
          return 'maxDigitP(-ve)(10,2)-{"dg":2,"org":' + args.value + '}';
        }
      }
    }
  })
  @IsNumberString()
  wtr_latest_mo: number;

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
  @Max(9999, {
    message: (args: ValidationArguments) => {
      if (args.value > 9999) {
        return 'max-{"dg":4}';
      }
    }
  })
  active_num_wells: number;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but input value is $value'
    }
  )
  first_prod_date: Date;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  last_prod_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0, {
    message: () => {
      return '$property Minimum Number is $constraint1';
    }
  })
  @Max(99999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 99999999) {
        return (
          '$property Maximum Number is $constraint1 , but ' +
          args.value +
          ' is out of range'
        );
      }
    }
  })
  td: number;

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
  @Max(99999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 99999999) {
        return 'max-{"dg":8}';
      }
    }
  })
  tvd: number;

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
  @Max(99999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 99999999) {
        return 'max-{"dg":8}';
      }
    }
  })
  upper_perf: number;

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
  @Max(99999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 99999999) {
        return 'max-{"dg":8}';
      }
    }
  })
  lower_perf: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  oil_gatherer: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  gas_gatherer: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @IsNotEmpty()
  @IsLatitude()
  @IsNumberString()
  latitude: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @IsNotEmpty()
  @IsLongitude()
  @IsNumberString()
  longitude: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  l_and_l_srce: string;

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
