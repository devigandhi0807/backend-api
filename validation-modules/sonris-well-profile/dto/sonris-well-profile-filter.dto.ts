import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';

export class SonrisWellProfileFilterDto extends PartialType(
  CommonSearchFieldDto
) {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  operator_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  field_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_serial_num: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_num: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  lease_num: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_status_code: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_status_code_descr: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_class_type_code: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_class_type_code_descr: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  api_num: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  effective_date: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  permit_date: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  spud_date: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  section: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  township: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  range: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  parish_code: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  distict_code: string;
}
