import { Module } from '@nestjs/common';
import { IhswellOnelinerService } from './ihswell-oneliner.service';
import { IhswellOnelinerController } from './ihswell-oneliner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PermissionsModule } from 'src/permission/permissions.module';
import { IhswellOnelinerRepository } from './ihswell-oneliner.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([IhswellOnelinerRepository]),
    AuthModule,
    PermissionsModule
  ],
  controllers: [IhswellOnelinerController],
  providers: [IhswellOnelinerService]
})
export class IhswellOnelinerModule {}
