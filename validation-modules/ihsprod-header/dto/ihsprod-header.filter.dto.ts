import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';
export class IHSProdHeaderFilterDto extends PartialType(CommonSearchFieldDto) {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  api: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  primary_product: number;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  province_state_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  district_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  county_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  operator_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  operator_city: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  field_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  lease_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  lease_number: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_num: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  location: string;
}
