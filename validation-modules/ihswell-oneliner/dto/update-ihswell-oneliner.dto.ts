import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';
import { CreateIhswellOnelinerDto } from './create-ihswell-oneliner.dto';

export class UpdateIhswellOnelinerDto extends OmitType(
  CreateIhswellOnelinerDto,
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
