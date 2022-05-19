import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { IhsMonthProdController } from './ihs-month-prod.controller';
import { IHSMonthProdRepository } from './ihs-month-prod.repository';
import { IhsMonthProdService } from './ihs-month-prod.service';

@Module({
  imports: [TypeOrmModule.forFeature([IHSMonthProdRepository]), AuthModule],
  controllers: [IhsMonthProdController],
  providers: [IhsMonthProdService]
})
export class IhsMonthProdModule {}
