import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { CreateUnitOrderDto } from './create-unit-order.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { UserEntity } from 'src/auth/entity/user.entity';

export class UpdateUnitOrderDto extends OmitType(CreateUnitOrderDto, [
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
