import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';
export class IHSProdByFieldOprFilterDto extends PartialType(
  CommonSearchFieldDto
) {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  api: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  lease_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_num: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  operator_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  location: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  field_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  state: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  county_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  basin: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  play_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  production_status: string;
}
