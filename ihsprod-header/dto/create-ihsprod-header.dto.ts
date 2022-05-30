import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
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
        return '$property entity value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property entity is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property entity is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  entity: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property api value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property api is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property api is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  api: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property source value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property source is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property source is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  source: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property entity_type value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property entity_type is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(30, {
    message:
      '$property entity_type is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  entity_type: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property primary_product value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property primary_product is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(10, {
    message:
      '$property primary_product is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  primary_product: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property country_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property country_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(40, {
    message:
      '$property country_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  country_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property province_state_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property province_state_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(40, {
    message:
      '$property province_state_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  province_state_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property district_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property district_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(40, {
    message:
      '$property district_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  district_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property county_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property county_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(40, {
    message:
      '$property county_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  county_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property os_indicator value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property os_indicator is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property os_indicator is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  os_indicator: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property basin value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property basin is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property basin is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  basin: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property operator_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property operator_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property operator_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  operator_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property operator_city value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property operator_city is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property operator_city is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  operator_city: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property field_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property field_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property field_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  field_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property prod_zone_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property prod_zone_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property prod_zone_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  prod_zone_name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property lease_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property lease_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property lease_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  lease_name: string;

  @ApiProperty()
  @IsNumber()
  lease_number: number;

  @ApiProperty()
  @IsString()
  @MinLength(1, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property well_num value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property well_num is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(10, {
    message:
      '$property well_num is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  well_num: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property location value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property location is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property location is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  location: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property gatherer_gas value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property gatherer_gas is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property gatherer_gas is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  gatherer_gas: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property gatherer_gas_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property gatherer_gas_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property gatherer_gas_name is too long. Maximal length is $constraint1 characters, but actual is $value'
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
        return '$property gatherer_liquid_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property gatherer_liquid_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(80, {
    message:
      '$property gatherer_liquid_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  gatherer_liquid_name: string;

  @ApiProperty()
  @IsDateString()
  status_date: Date;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property status_current_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property status_current_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property status_current_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  status_current_name: string;

  @ApiProperty()
  @IsDateString()
  date_production_start: Date;

  @ApiProperty()
  @IsDateString()
  date_production_stop: Date;

  @ApiProperty()
  @IsDateString()
  date_injection_start: Date;

  @ApiProperty()
  @IsDateString()
  date_injection_stop: Date;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property pool_name value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property pool_name is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property pool_name is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  pool_name: string;

  @ApiProperty({
    type: 'numeric',
    default: '0.0000'
  })
  @IsNumber()
  temperature_gradient: number;

  @ApiProperty()
  @IsString()
  @MinLength(3, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property n_factor value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property n_factor is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(20, {
    message:
      '$property n_factor is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  n_factor: string;

  @ApiProperty()
  @IsString()
  @MinLength(1, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 0) {
        return '$property rec_status value is empty. Minimum length is $constraint1 characters.';
      } else {
        return (
          '$property rec_status is too short. Minimum length is ' +
          args.constraints[0] +
          ' characters, but actual is $value'
        );
      }
    }
  })
  @MaxLength(5, {
    message:
      '$property rec_status is too long. Maximal length is $constraint1 characters, but actual is $value'
  })
  rec_status: string;

  @ApiHideProperty()
  @IsOptional()
  @IsString()
  created_by: string;
}
