import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { NotFoundException } from 'src/exception/not-found.exception';

import {
  basicFieldGroupsForSerializing,
  IHSLeaseVolSerializer
} from 'src/ihslease-vol/serializer/ihslease-vol.serializer';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';

import { Pagination } from 'src/paginate';
import { IHSLeaseVolRepository } from './ihslease-vol.repository';

import { CreateIHSLeaseVolDto } from './dto/create-ihslease-vol.dto';

import { IHSLeaseVolFilterDto } from './dto/ihslease-vol-filter.dto';
import { UpdateIHSLeaseVolDto } from './dto/update-ihslease-vol.dto';

@Injectable()
export class IhsleaseVolService
  implements CommonServiceInterface<IHSLeaseVolSerializer>
{
  constructor(
    @InjectRepository(IHSLeaseVolRepository)
    private volRepository: IHSLeaseVolRepository
  ) {}

  /**
   * Get all user paginated
   * @param volFilterDto
   */
  async findAll(
    volFilterDto: IHSLeaseVolFilterDto
  ): Promise<Pagination<IHSLeaseVolSerializer>> {
    return this.volRepository.paginate(
      volFilterDto,
      ['created_by', 'updated_by'],
      ['primary_api', 'lease_name', 'well_num'],
      {
        groups: [...basicFieldGroupsForSerializing]
      }
    );
  }

  /**
   * find vol by id
   * @param id
   */
  async findOne(id: number): Promise<IHSLeaseVolSerializer> {
    return this.volRepository.get(id, ['created_by', 'updated_by'], {
      groups: [...basicFieldGroupsForSerializing]
    });
  }

  /**
   * create new vol
   * @param createIHSLeaseVolDto
   */
  async create(
    createIHSLeaseVolDto: CreateIHSLeaseVolDto
  ): Promise<IHSLeaseVolSerializer> {
    return this.volRepository.store(createIHSLeaseVolDto);
  }

  /**
   * update role by id
   * @param id
   * @param updateIHSLeaseVolDto
   */
  async update(
    id: number,
    updateIHSLeaseVolDto: UpdateIHSLeaseVolDto
  ): Promise<IHSLeaseVolSerializer> {
    const vol = await this.volRepository.findOne(id);
    if (!vol) {
      throw new NotFoundException();
    }

    return this.volRepository.updateItem(vol, updateIHSLeaseVolDto);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.volRepository.delete({ id });
  }
}
