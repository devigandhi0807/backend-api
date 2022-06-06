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

  // async getRefreshTokenByUserId(
  //   userId: number,
  //   filter: RefreshPaginateFilterDto
  // ): Promise<Pagination<RefreshTokenSerializer>> {
  //   const paginationInfo: PaginationInfoInterface =
  //     this.repository.getPaginationInfo(filter);
  //   const findOptions: FindManyOptions = {
  //     where: {
  //       userId,
  //       isRevoked: false,
  //       expires: MoreThanOrEqual(new Date())
  //     }
  //   };
  //   const { page, skip, limit } = paginationInfo;
  //   findOptions.take = paginationInfo.limit;
  //   findOptions.skip = paginationInfo.skip;
  //   findOptions.order = {
  //     id: 'DESC'
  //   };
  //   const [results, total] = await this.repository.findAndCount(findOptions);
  //   const serializedResult = this.repository.transformMany(results);
  //   return new Pagination<RefreshTokenSerializer>({
  //     results: serializedResult,
  //     totalItems: total,
  //     pageSize: limit,
  //     currentPage: page,
  //     previous: page > 1 ? page - 1 : 0,
  //     next: total > skip + limit ? page + 1 : 0
  //   });
  //  }
  /**
   * Get all user paginated
   * @param volFilterDto
   */
  async findAll(
    volFilterDto: IHSLeaseVolFilterDto
  ): Promise<Pagination<IHSLeaseVolSerializer>> {
    return this.volRepository.paginate(
      volFilterDto,
      ['user'],
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
    return this.volRepository.get(id, ['user'], {
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
