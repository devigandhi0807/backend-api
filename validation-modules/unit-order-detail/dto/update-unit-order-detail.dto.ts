import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { CreateUnitOrderDetailDto } from './create-unit-order-detail.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { DeepPartial } from 'typeorm';
import { UserEntity } from 'src/auth/entity/user.entity';

export class UpdateUnitOrderDetailDto extends OmitType(
  CreateUnitOrderDetailDto,
  ['created_by' as const]
) {
  @ApiHideProperty()
  @IsOptional()
  @IsNumber()
  updated_by: DeepPartial<UserEntity>;

  @ApiHideProperty()
  @IsOptional()
  updatedAt: Date;
}
