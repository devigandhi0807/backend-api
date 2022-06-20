import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitOrderDetailService } from './unit-order-detail.service';
import { AuthModule } from 'src/auth/auth.module';
import { UnitOrderDetailController } from './unit-order-detail.controller';
import { UnitOrderDetailRepository } from './unit-order-detail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UnitOrderDetailRepository]), AuthModule],
  providers: [UnitOrderDetailService],
  controllers: [UnitOrderDetailController]
})
export class UnitOrderDetailModule {}
