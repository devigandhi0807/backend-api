import { OmitType, ApiHideProperty } from '@nestjs/swagger';
import { CreateSonrisWellProfileDto } from './create-sonris-well-profile.dto';
import { IsNumber, IsOptional } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { DeepPartial } from 'typeorm';
export class UpdateSonrisWellProfileDto extends OmitType(
  CreateSonrisWellProfileDto,
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
