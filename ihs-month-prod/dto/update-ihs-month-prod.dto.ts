import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { CreateIHSMonthProdDto } from './create-ihs-month-prod.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { UserEntity } from 'src/auth/entity/user.entity';

export class UpdateIHSMonthProdDto extends OmitType(CreateIHSMonthProdDto, [
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
