import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';

import { CreateIHSProdHeaderDto } from './dto/create-ihsprod-header.dto';

import {
  basicFieldGroupsForSerializing,
  IHSProdHeaderSerializer
} from './serializer/ihsprod-header.serializer';
import { Pagination } from 'src/paginate';

import { NotFoundException } from 'src/exception/not-found.exception';
import { IHSProdHeaderFilterDto } from './dto/ihsprod-header.filter.dto';
import { IHSProdHeaderRepository } from './ihsprod-header.repository';
import { UpdateIHSProdHeaderDto } from './dto/update-ihsprod-header.dto';
@Injectable()
export class IHSProdHeaderService
  implements CommonServiceInterface<IHSProdHeaderSerializer>
{
  constructor(
    @InjectRepository(IHSProdHeaderRepository)
    private headerRepository: IHSProdHeaderRepository
  ) {}
  async create(
    createIHSProdHeaderDto: CreateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    return this.headerRepository.store(createIHSProdHeaderDto);
  }
  findAll(
    headerFilterDto: IHSProdHeaderFilterDto
  ): Promise<Pagination<IHSProdHeaderSerializer>> {
    return this.headerRepository.paginate(
      headerFilterDto,
      ['created_by', 'updated_by'],
      [
        'entity',
        'api',
        'source',
        'entity_type',
        'primary_product',
        'basin',
        'operator_name',
        'field_name',
        'prod_zone_name',
        'lease_name',
        'lease_number',
        'well_num',
        'location',
        'gatherer_gas',
        'gatherer_gas_name',
        'status_date',
        'status_current_name',
        'date_production_start',
        'date_production_stop',
        'rec_status',
        'created_by',
        'updated_by'
      ],
      {
        groups: [...basicFieldGroupsForSerializing]
      }
    );
  }
  findOne(id: number): Promise<IHSProdHeaderSerializer> {
    return this.headerRepository.get(id, ['created_by', 'updated_by'], {
      groups: [...basicFieldGroupsForSerializing]
    });
  }
  async update(
    id: number,
    updateIHSProdHeaderDto: UpdateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    const prodHeader = await this.headerRepository.findOne(id);
    if (!prodHeader) {
      throw new NotFoundException();
    }

    return this.headerRepository.updateItem(prodHeader, updateIHSProdHeaderDto);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.headerRepository.delete({ id });
  }
}
