import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IhsleaseVolController } from './ihslease-vol.controller';
import { IhsleaseVolService } from './ihslease-vol.service';
import { AuthModule } from 'src/auth/auth.module';
import { IHSLeaseVolRepository } from './ihslease-vol.repository';
@Module({
  imports: [TypeOrmModule.forFeature([IHSLeaseVolRepository]), AuthModule],
  controllers: [IhsleaseVolController],
  providers: [IhsleaseVolService]
})
export class IhsleaseVolModule {}
