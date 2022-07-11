import { Test, TestingModule } from '@nestjs/testing';
import { IhswellOnelinerService } from './ihswell-oneliner.service';

describe('IhswellOnelinerService', () => {
  let service: IhswellOnelinerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IhswellOnelinerService],
    }).compile();

    service = module.get<IhswellOnelinerService>(IhswellOnelinerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
