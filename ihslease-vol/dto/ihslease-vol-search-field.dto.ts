import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Min, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

export class IHSLeaseVolSearchFieldDto {
  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  primary_api: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  lease_name: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  @IsString()
  well_num: string;

  @ApiPropertyOptional()
  @ValidateIf((array, value) => value)
  @IsString()
  search: ['primary_api', 'lease_name', 'well_num'];

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
