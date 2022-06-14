import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidationArguments
} from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';

export class CreateIHSLeaseVolDto {
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
  @MaxLength(80, {
    message: 'maxLength-{"ln":80,"count":80}'
  })
  map_symbol: string;

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
  primary_api: string;

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

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @IsNotEmpty()
  @IsNumberString()
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
  oil_ytd: number;

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

  // @ApiHideProperty()
  // @IsOptional()
  // @IsString()
  // created_by: string;
}
