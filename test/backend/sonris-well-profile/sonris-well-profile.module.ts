import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SonrisWellProfileService } from './sonris-well-profile.service';
import { SonrisWellProfileController } from './sonris-well-profile.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PermissionsModule } from 'src/permission/permissions.module';
import { SonrisWellProfileRepository } from './sonris-well-profile.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SonrisWellProfileRepository]),
    AuthModule,
    PermissionsModule
  ],
  controllers: [SonrisWellProfileController],
  providers: [SonrisWellProfileService]
})
export class SonrisWellProfileModule {}
