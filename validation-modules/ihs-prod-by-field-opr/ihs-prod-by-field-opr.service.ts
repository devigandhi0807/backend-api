import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';
import { CreateIHSProdByFieldOprDto } from './dto/create-ihs-prod-by-field-opr.dto';
import { IHSProdByFieldOprFilterDto } from './dto/ihs-prod-by-field-opr.filter.dto';
import { IHSProdByFieldOprRepository } from './ihs-prod-by-field-opr.repository';
import { IHSProdByFieldOprSerializer } from './serializer/ihs-prod-by-field-opr.serializer';
import { Pagination } from 'src/paginate';
import { UpdateIHSProdByFieldOprDto } from './dto/update-ihs-prod-by-field-opr.dto';
import { NotFoundException } from 'src/exception/not-found.exception';

@Injectable()
export class IhsProdByFieldOprService
  implements CommonServiceInterface<IHSProdByFieldOprSerializer>
{
  constructor(
    @InjectRepository(IHSProdByFieldOprRepository)
    private fieldOprRepository: IHSProdByFieldOprRepository
  ) {}
  async create(
    createIHSProdByFieldOprDto: CreateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    return this.fieldOprRepository.store(createIHSProdByFieldOprDto);
  }
  findAll(
    fieldOprFilterDto: IHSProdByFieldOprFilterDto
  ): Promise<Pagination<IHSProdByFieldOprSerializer>> {
    return this.fieldOprRepository.paginate(
      fieldOprFilterDto,
      ['created_by', 'updated_by'],
      [
        'api',
        'lease_name',
        'well_num',
        'operator_name',
        'location',
        'field_name',
        'state',
        'county_name',
        'basin',
        'play_name',
        'production_status'
      ]
    );
  }
  async findOne(id: number): Promise<IHSProdByFieldOprSerializer> {
    return this.fieldOprRepository.get(id, ['created_by', 'updated_by']);
  }
  async update(
    id: number,
    updateIHSProdByFieldOprDto: UpdateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const prodByFieldOpr = await this.fieldOprRepository.findOne(id);
    if (!prodByFieldOpr) {
      throw new NotFoundException();
    }

    return this.fieldOprRepository.updateItem(
      prodByFieldOpr,
      updateIHSProdByFieldOprDto
    );
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.fieldOprRepository.delete({ id });
  }
}
