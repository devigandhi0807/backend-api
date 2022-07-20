import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IhsProdByFieldOprService } from './ihs-prod-by-field-opr.service';
import { IhsProdByFieldOprController } from './ihs-prod-by-field-opr.controller';
import { AuthModule } from 'src/auth/auth.module';
import { IHSProdByFieldOprRepository } from './ihs-prod-by-field-opr.repository';
import { PermissionsModule } from 'src/permission/permissions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([IHSProdByFieldOprRepository]),
    AuthModule,
    PermissionsModule
  ],
  providers: [IhsProdByFieldOprService],
  controllers: [IhsProdByFieldOprController]
})
export class IhsProdByFieldOprModule {}
