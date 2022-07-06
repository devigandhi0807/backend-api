import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';

import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';
export class UnitOrderFilterDto extends PartialType(CommonSearchFieldDto) {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  operator_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  township: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  section: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  county_name: string;
}
