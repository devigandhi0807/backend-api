import { Test, TestingModule } from '@nestjs/testing';
import { IhswellOnelinerController } from './ihswell-oneliner.controller';
import { IhswellOnelinerService } from './ihswell-oneliner.service';

describe('IhswellOnelinerController', () => {
  let controller: IhswellOnelinerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IhswellOnelinerController],
      providers: [IhswellOnelinerService]
    }).compile();

    controller = module.get<IhswellOnelinerController>(
      IhswellOnelinerController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
