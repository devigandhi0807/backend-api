import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
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
  entity: string;

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
  @MaxLength(10, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  primary_product: string;

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
  @MaxLength(20, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  regulatory_api: string;

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
  @IsNumber()
  @Matches(/^(19|20)d{2}$/, {
    message: 'Year is between 1900 to 2099'
  })
  year: number;

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
  month: string;

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
  liquid: number;

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
  gas: number;

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
  water: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 4 digits. the given input value is empty' +
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
        if (args.value.split('.')[0].length > 6) {
          return (
            '$property Maximum Digits of the whole number is 6 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 4) {
          return (
            '$property Maximum Digits of the precision is 4 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 7) {
          return (
            '$property Maximum Digits of the whole number is 7 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 4) {
          return (
            '$property Maximum Digits of the precision is 4 digits. the given input value is ' +
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
  ratio_gas_oil: number;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return (
          '$property must be numeric with the maximun precision is 4 digits. the given input value is empty' +
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
        if (args.value.split('.')[0].length > 6) {
          return (
            '$property Maximum Digits of the whole number is 6 digits. the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 4) {
          return (
            '$property Maximum Digits of the precision is 4 digits. the given input value is ' +
            args.value
          );
        }
        return (
          '$property Maximum Digits are 11 digits including dot(.) if it is +ve numeric number. the given input value is ' +
          args.value
        );
      } else if (args.value.indexOf('-') === 0 && args.value.length > 12) {
        if (args.value.split('.')[0].length > 7) {
          return (
            '$property Maximum Digits of the whole number is 7 digits including -ve sign(-). the given input value is ' +
            args.value
          );
        }
        if (args.value.split('.')[1].length > 4) {
          return (
            '$property Maximum Digits of the precision is 4 digits. the given input value is ' +
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
  percent_water: number;

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
  wells: number;

  @ApiProperty()
  @IsNumber()
  @Min(0, {
    message: () => {
      return '$property Minimum Number is $constraint1';
    }
  })
  @Max(999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 999999) {
        return (
          '$property Maximum Number is $constraint1 , but ' +
          args.value +
          ' is out of range'
        );
      }
    }
  })
  days_on: number;

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
