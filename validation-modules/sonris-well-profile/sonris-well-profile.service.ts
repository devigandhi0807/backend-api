import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from 'src/exception/not-found.exception';
import { CommonServiceInterface } from 'src/common/interfaces/common-service.interface';
import { CreateSonrisWellProfileDto } from './dto/create-sonris-well-profile.dto';
import { UpdateSonrisWellProfileDto } from './dto/update-sonris-well-profile.dto';
import { SonrisWellProfileSerializer } from './serializer/sonris-well-profile.serializer';
import { SonrisWellProfileRepository } from './sonris-well-profile.repository';
import { SonrisWellProfileFilterDto } from './dto/sonris-well-profile-filter.dto';
import { Pagination } from 'src/paginate';

@Injectable()
export class SonrisWellProfileService
  implements CommonServiceInterface<SonrisWellProfileSerializer>
{
  constructor(
    @InjectRepository(SonrisWellProfileRepository)
    private sonrisRepository: SonrisWellProfileRepository
  ) {}

  async create(
    createSonrisWellProfileDto: CreateSonrisWellProfileDto
  ): Promise<SonrisWellProfileSerializer> {
    return this.sonrisRepository.store(createSonrisWellProfileDto);
  }

  async findAll(
    sonrisFilterDto: SonrisWellProfileFilterDto
  ): Promise<Pagination<SonrisWellProfileSerializer>> {
    return this.sonrisRepository.paginate(
      sonrisFilterDto,
      ['created_by', 'updated_by'],
      [
        'operator_name',
        'field_name',
        'well_serial_num',
        'well_name',
        'well_num',
        'lease_num',
        'well_status_code',
        'well_status_code_descr',
        'well_class_type_code',
        'well_class_type_code_descr',
        'api_num',
        'effective_date',
        'permit_date',
        'spud_date',
        'section',
        'township',
        'range',
        'parish_code',
        'district_code'
      ]
    );
  }

  async findOne(id: number): Promise<SonrisWellProfileSerializer> {
    return this.sonrisRepository.get(id);
  }

  async update(
    id: number,
    updateSonrisWellProfileDto: UpdateSonrisWellProfileDto
  ): Promise<SonrisWellProfileSerializer> {
    const sonris = await this.sonrisRepository.findOne(id);
    if (!sonris) {
      throw new NotFoundException();
    }

    return this.sonrisRepository.updateItem(sonris, updateSonrisWellProfileDto);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.sonrisRepository.delete({ id });
  }
}
