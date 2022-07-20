import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { IHSProdHeaderController } from './ihsprod-header.controller';
import { IHSProdHeaderRepository } from './ihsprod-header.repository';
import { IHSProdHeaderService } from './ihsprod-header.service';

@Module({
  imports: [TypeOrmModule.forFeature([IHSProdHeaderRepository]), AuthModule],
  controllers: [IHSProdHeaderController],
  providers: [IHSProdHeaderService]
})
export class IHSProdHeaderModule {}
