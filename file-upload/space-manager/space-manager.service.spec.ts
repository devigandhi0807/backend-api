import { Test, TestingModule } from '@nestjs/testing';
import { SpaceManagerService } from './space-manager.service';

describe('SpaceManagerService', () => {
  let service: SpaceManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceManagerService],
    }).compile();

    service = module.get<SpaceManagerService>(SpaceManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
