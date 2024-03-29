import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';
import { Pagination } from 'src/paginate';
import { CreateIHSMonthProdDto } from './dto/create-ihs-month-prod.dto';
import { UpdateIHSMonthProdDto } from './dto/update-ihs-month-prod.dto';
import { IHSMonthProdRepository } from './ihs-month-prod.repository';
import {
  basicFieldGroupsForSerializing,
  IHSMonthProdSerializer
} from './serializer/ihs-month-prod.serializer';
import { NotFoundException } from 'src/exception/not-found.exception';
import { IHSMonthProdFilterDto } from './dto/ihs-month-prod-filter.dto';
@Injectable()
export class IhsMonthProdService
  implements CommonServiceInterface<IHSMonthProdSerializer>
{
  constructor(
    @InjectRepository(IHSMonthProdRepository)
    private prodRepository: IHSMonthProdRepository
  ) {}
  async create(
    createIHSMonthProdDto: CreateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    return this.prodRepository.store(createIHSMonthProdDto);
  }
  findAll(
    prodFilterDto: IHSMonthProdFilterDto
  ): Promise<Pagination<IHSMonthProdSerializer>> {
    return this.prodRepository.paginate(
      prodFilterDto,
      ['created_by', 'updated_by'],
      [
        'primary_product',
        'lease_name',
        'well_num',
        'api',
        'regulatory_api',
        'operator_name',
        'year',
        'month',
        'days_on'
      ],
      {
        groups: [...basicFieldGroupsForSerializing]
      }
    );
  }
  findOne(id: number): Promise<IHSMonthProdSerializer> {
    return this.prodRepository.get(id, ['created_by', 'updated_by'], {
      groups: [...basicFieldGroupsForSerializing]
    });
  }
  async update(
    id: number,
    updateIHSMonthProdDto: UpdateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const prod = await this.prodRepository.findOne(id);
    if (!prod) {
      throw new NotFoundException();
    }

    return this.prodRepository.updateItem(prod, updateIHSMonthProdDto);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.prodRepository.delete({ id });
  }
}
