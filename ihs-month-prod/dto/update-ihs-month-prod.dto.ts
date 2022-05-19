import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { CreateIHSMonthProdDto } from './create-ihs-month-prod.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateIHSMonthProdDto extends OmitType(CreateIHSMonthProdDto, [
  'created_by' as const
]) {
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  updated_by: string;

  @ApiHideProperty()
  @IsOptional()
  updatedAt: Date;
}
