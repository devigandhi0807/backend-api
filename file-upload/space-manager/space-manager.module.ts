import { Module } from '@nestjs/common';
import {
  SpacesManagerServicerovider,
  SpaceManagerService
} from './space-manager.service';
import { SpaceManagerController } from './space-manager.controller';

@Module({
  controllers: [SpaceManagerController],
  providers: [SpaceManagerService, SpacesManagerServicerovider]
})
export class SpaceManagerModule {}
