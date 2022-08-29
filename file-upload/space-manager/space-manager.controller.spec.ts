import { Test, TestingModule } from '@nestjs/testing';
import { SpaceManagerController } from './space-manager.controller';
import { SpaceManagerService } from './space-manager.service';

describe('SpaceManagerController', () => {
  let controller: SpaceManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceManagerController],
      providers: [SpaceManagerService],
    }).compile();

    controller = module.get<SpaceManagerController>(SpaceManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
