import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidationPayloadInterface } from 'src/common/interfaces/validation-error.interface';
import { Pagination } from 'src/paginate';
import { DeepPartial, Not, ObjectLiteral } from 'typeorm';
import { CreateIhswellOnelinerDto } from './dto/create-ihswell-oneliner.dto';
import { IhswellOneLinerFilterDto } from './dto/ihswell-oneliner.filter.dto';
//import { UpdateIhswellOnelinerDto } from './dto/update-ihswell-oneliner.dto';
import { IhswellOnelinerEntity } from './entities/ihswell-oneliner.entity';
import { IhswellOnelinerRepository } from './ihswell-oneliner.repository';
import { IhswellOnelinerSerializer } from './serializer/ihswell-oneliner.serializer';

@Injectable()
export class IhswellOnelinerService {
  constructor(
    @InjectRepository(IhswellOnelinerRepository)
    private linerRepository: IhswellOnelinerRepository
  ) {}
  async create(
    createIhswellOnelinerDto: CreateIhswellOnelinerDto
  ): Promise<IhswellOnelinerSerializer> {
    return this.linerRepository.store(createIhswellOnelinerDto);
  }

  async findAll(
    oneLinerDto: IhswellOneLinerFilterDto
  ): Promise<Pagination<IhswellOnelinerSerializer>> {
    return this.linerRepository.paginate(
      oneLinerDto,
      ['created_by', 'updated_by'],
      [
        'source',
        'api_number',
        'operator_name',
        'current_operator_city',
        'basin_code'
      ]
    );
  }

  async findOne(id: number): Promise<IhswellOnelinerSerializer> {
    return this.linerRepository.get(id, ['created_by', 'updated_by']);
  }

  async update(
    id: number,
    updateIhswellOnelinerDto: DeepPartial<IhswellOnelinerEntity>
  ): Promise<IhswellOnelinerSerializer> {
    const wellOneLiner = await this.linerRepository.get(id, []);
    console.log(wellOneLiner);
    if (!wellOneLiner) {
      throw new NotFoundException();
    }
    const checkUniqueFieldArray = ['uwi', 'api_number', 'regulatory_api'];
    const errorPayload: ValidationPayloadInterface[] = [];
    for (const field of checkUniqueFieldArray) {
      const condition: ObjectLiteral = {
        [field]: updateIhswellOnelinerDto[field]
      };
      condition.id = Not(id);
      const checkUnique = await this.linerRepository.countEntityByCondition(
        condition
      );
      if (checkUnique > 0) {
        errorPayload.push({
          property: field,
          constraints: {
            unique: 'already taken'
          }
        });
      }
    }
    if (Object.keys(errorPayload).length > 0) {
      throw new UnprocessableEntityException(errorPayload);
    }
    return this.linerRepository.updateEntity(
      wellOneLiner,
      updateIhswellOnelinerDto
    );
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.linerRepository.delete({ id });
  }
}
