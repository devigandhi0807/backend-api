import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateIHSProdHeaderDto } from './create-ihsprod-header.dto';

export class UpdateIHSProdHeaderDto extends OmitType(CreateIHSProdHeaderDto, [
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
