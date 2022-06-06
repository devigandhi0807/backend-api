import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsLatitude,
  IsLongitude,
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
  user: DeepPartial<UserEntity>;

  @ApiProperty()
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
  summary: string;

  @ApiProperty()
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
  source: string;

  @ApiProperty()
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
  @MaxLength(30, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  entity_type: string;

  @ApiProperty()
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
  api: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  lease_name: string;

  @ApiProperty()
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
  @MaxLength(10, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  well_num: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  operator_name: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  location: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  field_name: string;

  @ApiProperty()
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
  @MaxLength(30, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  state: string;

  @ApiProperty()
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
  @MaxLength(30, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  country_name: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  basin: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  play_name: string;

  @ApiProperty()
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
  @MaxLength(30, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  production_status: string;

  @ApiProperty()
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
  @MaxLength(40, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  resv_onshore: string;

  @ApiProperty()
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
  @MaxLength(40, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  resv_offshore: string;

  @ApiProperty()
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
  lease_code: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  oil_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  gas_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  wtr_cum: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  oil_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  gas_ytd: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
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
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  oil_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  gas_latest_mo: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 2 digits. the given input value is empty' +
          args.value
        );
      }
      return '$property Minimum Digit is $constraint1 digits ' + args.value;
    }
  })
  @MaxLength(12, {
    message: (args: ValidationArguments) => {
      if (
        args.value.indexOf('-') != 0 &&
        (args.value.length === 12 || args.value.length > 12)
      ) {
        if (args.value.split('.')[0].length > 8) {
          return (
            '$property Maximum Digits of the whole number is 8 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 9) {
          return (
            '$property Maximum Digits of the whole number is 9 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 2) {
          return (
            '$property Maximum Digits of the precision is 2 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 12 digits including dot(.) and -ve sign(-) if it is -ve numeric number.the given input value is ' +
          args.value
        );
      }
    }
  })
  @IsNumberString()
  wtr_latest_mo: number;

  @ApiProperty()
  @IsNumber()
  @Min(0, {
    message: () => {
      return '$property Minimum Number is $constraint1';
    }
  })
  @Max(9999, {
    message: (args: ValidationArguments) => {
      if (args.value > 9999) {
        return (
          '$property Maximum Number is $constraint1 , but ' +
          args.value +
          ' is out of range'
        );
      }
    }
  })
  active_num_wells: number;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
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
  tvd: number;

  @ApiProperty()
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
  upper_perf: number;

  @ApiProperty()
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
  lower_perf: number;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  oil_gatherer: string;

  @ApiProperty()
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  gas_gatherer: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @IsLatitude()
  @IsNumberString()
  latitude: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.00000000'
  })
  @IsLongitude()
  @IsNumberString()
  longitude: number;

  @ApiProperty()
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
  l_and_l_srce: string;

  @ApiProperty()
  @IsString()
  @MinLength(1, {
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
  @MaxLength(5, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  rec_status: string;

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  created_by: string;
}
