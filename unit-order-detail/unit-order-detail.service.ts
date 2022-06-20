import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { NotFoundException } from 'src/exception/not-found.exception';

import {
  basicFieldGroupsForSerializing,
  UnitOrderDetailSerializer
} from 'src/unit-order-detail/serializer/unit-order-detail.serializer';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';

import { Pagination } from 'src/paginate';
import { UnitOrderDetailRepository } from './unit-order-detail.repository';

import { CreateUnitOrderDetailDto } from './dto/create-unit-order-detail.dto';

import { UnitOrderDetailFilterDto } from './dto/unit-order-detail-filter.dto';
import { UpdateUnitOrderDetailDto } from './dto/update-unit-order-detail.dto';

@Injectable()
export class UnitOrderDetailService
  implements CommonServiceInterface<UnitOrderDetailSerializer>
{
  constructor(
    @InjectRepository(UnitOrderDetailRepository)
    private unitOrderDetailRepository: UnitOrderDetailRepository
  ) {}

  /**
   * Get all user paginated
   * @param unitOrderDeFilterDto
   */
  async findAll(
    unitOrderDeFilterDto: UnitOrderDetailFilterDto
  ): Promise<Pagination<UnitOrderDetailSerializer>> {
    return this.unitOrderDetailRepository.paginate(
      unitOrderDeFilterDto,
      ['created_by', 'updated_by'],
      ['tract_no', 'Unit_order_id', 'interest_type', 'ownership_display_name'],
      {
        groups: [...basicFieldGroupsForSerializing]
      }
    );
  }

  /**
   * find vol by id
   * @param id
   */
  async findOne(id: number): Promise<UnitOrderDetailSerializer> {
    return this.unitOrderDetailRepository.get(
      id,
      ['created_by', 'updated_by'],
      {
        groups: [...basicFieldGroupsForSerializing]
      }
    );
  }

  /**
   * create new vol
   * @param createUnitOrderDto
   */
  async create(
    createUnitOrderDetailDto: CreateUnitOrderDetailDto
  ): Promise<UnitOrderDetailSerializer> {
    return this.unitOrderDetailRepository.store(createUnitOrderDetailDto);
  }

  /**
   * update role by id
   * @param id
   * @param updateUnitOrderDetailDto
   */
  async update(
    id: number,
    updateUnitOrderDetailDto: UpdateUnitOrderDetailDto
  ): Promise<UnitOrderDetailSerializer> {
    const orderDetail = await this.unitOrderDetailRepository.findOne(id);
    if (!orderDetail) {
      throw new NotFoundException();
    }

    return this.unitOrderDetailRepository.updateItem(
      orderDetail,
      updateUnitOrderDetailDto
    );
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.unitOrderDetailRepository.delete({ id });
  }
}
