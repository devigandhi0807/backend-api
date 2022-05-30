import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Min, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class IHSMonthProdSearchFieldDto {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  entity: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  source: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  entity_type: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  primary_product: string;

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
  api: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @Transform(({ value }) => Number.parseInt(value), {
    toClassOnly: true
  })
  @Min(1, {
    message: 'min-{"ln":1,"count":1}'
  })
  limit: number;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @Transform(({ value }) => Number.parseInt(value), {
    toClassOnly: true
  })
  @Min(1, {
    message: 'min-{"ln":1,"count":1}'
  })
  page: number;
}
