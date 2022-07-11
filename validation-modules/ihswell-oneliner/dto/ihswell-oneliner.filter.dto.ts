import { PartialType } from '@nestjs/swagger';
//import { IsString, ValidateIf } from 'class-validator';
import { CommonSearchFieldDto } from 'src/common/extra/common-search-field.dto';
export class IhswellOneLinerFilterDto extends PartialType(
  CommonSearchFieldDto
) {}
