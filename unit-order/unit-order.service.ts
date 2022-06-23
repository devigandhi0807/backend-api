import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { NotFoundException } from 'src/exception/not-found.exception';

import {
  basicFieldGroupsForSerializing,
  UnitOrderSerializer
} from 'src/unit-order/serializer/unit-order.serializer';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';

import { Pagination } from 'src/paginate';
import { UnitOrderRepository } from './unit-order.repository';

import { CreateUnitOrderDto } from './dto/create-unit-order.dto';

import { UnitOrderFilterDto } from './dto/unit-order-filter.dto';
import { UpdateUnitOrderDto } from './dto/update-unit-order.dto';

@Injectable()
export class UnitOrderService
  implements CommonServiceInterface<UnitOrderSerializer>
{
  constructor(
    @InjectRepository(UnitOrderRepository)
    private unitRepository: UnitOrderRepository
  ) {}

  /**
   * Get all user paginated
   * @param unitFilterDto
   */
  async findAll(
    unitFilterDto: UnitOrderFilterDto
  ): Promise<Pagination<UnitOrderSerializer>> {
    return this.unitRepository.paginate(
      unitFilterDto,
      ['created_by', 'updated_by'],
      ['operator_name', 'township', 'section'],
      {
        groups: [...basicFieldGroupsForSerializing]
      }
    );
  }

  /**
   * find vol by id
   * @param id
   */
  async findOne(id: number): Promise<UnitOrderSerializer> {
    return this.unitRepository.get(id, ['created_by', 'updated_by'], {
      groups: [...basicFieldGroupsForSerializing]
    });
  }

  /**
   * create new vol
   * @param createUnitOrderDto
   */
  async create(
    createUnitOrderDto: CreateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    return this.unitRepository.store(createUnitOrderDto);
  }

  /**
   * update role by id
   * @param id
   * @param updateUnitOrderDto
   */
  async update(
    id: number,
    updateUnitOrderDto: UpdateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    const vol = await this.unitRepository.findOne(id);
    if (!vol) {
      throw new NotFoundException();
    }

    return this.unitRepository.updateItem(vol, updateUnitOrderDto);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.unitRepository.delete({ id });
  }

  /**
   * Count UnitOrder Details
   */

  async unitOrderDetailsCount(id: number): Promise<UnitOrderSerializer> {
    return this.unitRepository
      .createQueryBuilder('unit_order')
      .loadRelationCountAndMap(
        'unit_order.unitOrderDetailsCount',
        'unit_order.unitOrderDetails'
      )
      .where('unit_order.id = :id', { id: id })
      .getOne();
  }
}
