import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
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

export class CreateIHSMonthProdDto {
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
  entity: string;

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
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(20, {
    message: 'maxLength-{"ln":20,"count":20}'
  })
  entity_type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  primary_product: string;

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
  operator_name: string;

  @ApiProperty()
  @IsNumber()
  @Matches(/^(19|20)d{2}$/, {
    message: 'Year is between 1900 to 2099'
  })
  year: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'minLength-{"ln":3,"count":3}'
  })
  @MaxLength(10, {
    message: 'maxLength-{"ln":10,"count":10}'
  })
  month: string;

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
  liquid: number;

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
  gas: number;

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
  water: number;

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
  ratio_gas_oil: number;

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
  percent_water: number;

  @ApiProperty()
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
  wells: number;

  @ApiProperty()
  @IsNumber()
  @Min(0, {
    message: (args: ValidationArguments) => {
      if (args.value < 0) {
        return 'min-{"ln":0}';
      }
    }
  })
  @Max(999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 999999) {
        return 'max-{"dg":6}';
      }
    }
  })
  days_on: number;

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
