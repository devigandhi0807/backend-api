import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitOrderDetailService } from './unit-order-detail.service';
import { AuthModule } from 'src/auth/auth.module';
import { UnitOrderDetailController } from './unit-order-detail.controller';
import { UnitOrderDetailRepository } from './unit-order-detail.repository';
import { PermissionsModule } from 'src/permission/permissions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UnitOrderDetailRepository]),
    AuthModule,
    PermissionsModule
  ],
  providers: [UnitOrderDetailService],
  controllers: [UnitOrderDetailController]
})
export class UnitOrderDetailModule {}
