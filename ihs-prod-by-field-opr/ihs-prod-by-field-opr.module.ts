import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IhsProdByFieldOprService } from './ihs-prod-by-field-opr.service';
import { IhsProdByFieldOprController } from './ihs-prod-by-field-opr.controller';
import { AuthModule } from 'src/auth/auth.module';
import { IHSProdByFieldOprRepository } from './ihs-prod-by-field-opr.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([IHSProdByFieldOprRepository]),
    AuthModule
  ],
  providers: [IhsProdByFieldOprService],
  controllers: [IhsProdByFieldOprController]
})
export class IhsProdByFieldOprModule {}
