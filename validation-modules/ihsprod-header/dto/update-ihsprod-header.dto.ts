import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { CreateIHSProdHeaderDto } from './create-ihsprod-header.dto';
import { DeepPartial } from 'typeorm';
export class UpdateIHSProdHeaderDto extends OmitType(CreateIHSProdHeaderDto, [
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
