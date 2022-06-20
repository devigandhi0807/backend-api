import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UnitOrderController } from './unit-order.controller';
import { UnitOrderRepository } from './unit-order.repository';
import { UnitOrderService } from './unit-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([UnitOrderRepository]), AuthModule],
  controllers: [UnitOrderController],
  providers: [UnitOrderService]
})
export class UnitOrderModule {}
