import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';

import { CreateIHSProdHeaderDto } from './dto/create-ihsprod-header.dto';

import { IHSProdHeaderSerializer } from './serializer/ihsprod-header.serializer';
import { Pagination } from 'src/paginate';

import { NotFoundException } from 'src/exception/not-found.exception';
import { IHSProdHeaderFilterDto } from './dto/ihsprod-header.filter.dto';
import { IHSProdHeaderRepository } from './ihsprod-header.repository';
import { UpdateIHSProdHeaderDto } from './dto/update-ihsprod-header.dto';
//import { Not, ObjectLiteral } from 'typeorm';

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
        'api',
        'primary_product',
        'province_state_name',
        'district_name',
        'county_name',
        'operator_name',
        'operator_city',
        'field_name',
        'lease_name',
        'lease_number',
        'well_num',
        'location'
      ]
    );
  }
  async findOne(id: number): Promise<IHSProdHeaderSerializer> {
    return this.headerRepository.get(id, ['created_by', 'updated_by']);
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

  // async update(
  //   id: number,
  //   updateIHSProdHeaderDto: UpdateIHSProdHeaderDto
  // ): Promise<IHSProdHeaderSerializer> {
  //   const header_entity = await this.headerRepository.findOne(id);
  //   if (!header_entity) {
  //     throw new NotFoundException();
  //   }
  //   const condition: ObjectLiteral = {
  //     entity: updateIHSProdHeaderDto.entity
  //   };
  //   condition.id = Not(id);
  //   const checkUniqueTitle = await this.headerRepository.countEntityByCondition(
  //     condition
  //   );
  //   if (checkUniqueTitle > 0) {
  //     throw new UnprocessableEntityException({
  //       property: 'entity',
  //       constraints: {
  //         unique: 'already taken'
  //       }
  //     });
  //   }

  //   return this.headerRepository.updateItem(
  //     header_entity,
  //     updateIHSProdHeaderDto
  //   );
  // }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.headerRepository.delete({ id });
  }
}
