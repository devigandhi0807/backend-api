import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, ValidateIf } from 'class-validator';
//import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';
export class IhswellOneLinerFilterDto extends PartialType(
  CommonSearchFieldDto
) {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  source: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  api_number: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  operator_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  current_operator_city: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  basin_code: string;
}
