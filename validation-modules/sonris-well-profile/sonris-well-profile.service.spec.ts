import { Test, TestingModule } from '@nestjs/testing';
import { SonrisWellProfileService } from './sonris-well-profile.service';

describe('SonrisWellProfileService', () => {
  let service: SonrisWellProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SonrisWellProfileService]
    }).compile();

    service = module.get<SonrisWellProfileService>(SonrisWellProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
