import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateIHSProdByFieldOprDto } from './create-ihs-prod-by-field-opr.dto';

export class UpdateIHSProdByFieldOprDto extends OmitType(
  CreateIHSProdByFieldOprDto,
  ['created_by' as const]
) {
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  updated_by: string;

  @ApiHideProperty()
  @IsOptional()
  updatedAt: Date;
}
