import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  map_symbol: string;

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
  primary_api: string;

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
  oil_ytd: number;

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
