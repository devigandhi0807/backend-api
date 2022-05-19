import { ApiHideProperty, OmitType } from '@nestjs/swagger';

import { CreateIHSLeaseVolDto } from './create-ihslease-vol.dto';
import { IsOptional, IsString } from 'class-validator';
export class UpdateIHSLeaseVolDto extends OmitType(CreateIHSLeaseVolDto, [
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
