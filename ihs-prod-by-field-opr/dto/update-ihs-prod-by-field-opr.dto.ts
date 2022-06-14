import { ApiHideProperty, OmitType } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { UserEntity } from 'src/auth/entity/user.entity';
import { CreateIHSProdByFieldOprDto } from './create-ihs-prod-by-field-opr.dto';
import { DeepPartial } from 'typeorm';
export class UpdateIHSProdByFieldOprDto extends OmitType(
  CreateIHSProdByFieldOprDto,
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
