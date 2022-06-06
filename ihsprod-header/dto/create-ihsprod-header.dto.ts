import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
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
  @MaxLength(10, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  primary_product: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, {
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
  @MaxLength(40, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  province_state_name: string;

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
  district_name: string;

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
  county_name: string;

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
  os_indicator: string;

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
  @MaxLength(20, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  operator_city: string;

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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  prod_zone_name: string;

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
  @IsNumber()
  @Min(0, {
    message: () => {
      return '$property Minimum Number is $constraint1';
    }
  })
  @Max(9999999999, {
    message: (args: ValidationArguments) => {
      if (args.value > 9999999999) {
        return (
          '$property Maximum Number is $constraint1 , but ' +
          args.value +
          ' is out of range'
        );
      }
    }
  })
  lease_number: number;

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
  gatherer_gas: string;

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
  gatherer_gas_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property gatherer_liquid value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property gatherer_liquid is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property gatherer_liquid is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  gatherer_liquid: string;

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
  @MaxLength(80, {
    message:
      '$property is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  gatherer_liquid_name: string;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  status_date: Date;

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
  status_current_name: string;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_production_start: Date;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_production_stop: Date;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_injection_start: Date;

  @ApiProperty()
  @IsDateString()
  @Matches(
    /^([0-9]{4}|[0-9]{2})[./-]([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])$/,
    {
      message: '$property is yyyy-mm-dd format. but actual is $value'
    }
  )
  date_injection_stop: Date;

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
  pool_name: string;

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
  temperature_gradient: number;

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
  n_factor: string;

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
