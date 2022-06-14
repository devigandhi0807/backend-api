import { ApiHideProperty, OmitType } from '@nestjs/swagger';

import { CreateIHSLeaseVolDto } from './create-ihslease-vol.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';
export class UpdateIHSLeaseVolDto extends OmitType(CreateIHSLeaseVolDto, [
  'created_by' as const
]) {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  updated_by: DeepPartial<UserEntity>;

  @ApiHideProperty()
  @IsOptional()
  updatedAt: Date;
}
