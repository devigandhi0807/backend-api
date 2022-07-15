import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';

export class UnitOrderDetailFilterDto extends PartialType(
  CommonSearchFieldDto
) {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  tract_no: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  Unit_order_id: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  interest_type: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  ownership_display_name: string;
}
