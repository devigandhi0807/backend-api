import { Test, TestingModule } from '@nestjs/testing';
import { SonrisWellProfileController } from './sonris-well-profile.controller';
import { SonrisWellProfileService } from './sonris-well-profile.service';

describe('SonrisWellProfileController', () => {
  let controller: SonrisWellProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SonrisWellProfileController],
      providers: [SonrisWellProfileService]
    }).compile();

    controller = module.get<SonrisWellProfileController>(
      SonrisWellProfileController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
