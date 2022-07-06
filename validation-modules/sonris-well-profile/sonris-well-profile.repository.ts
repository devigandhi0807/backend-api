import { EntityRepository, ILike } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';

import { SonrisWellProfileEntity } from './entities/sonris-well-profile.entity';
import { SonrisWellProfileSerializer } from './serializer/sonris-well-profile.serializer';
import { CreateSonrisWellProfileDto } from './dto/create-sonris-well-profile.dto';
import { UpdateSonrisWellProfileDto } from './dto/update-sonris-well-profile.dto';

@EntityRepository(SonrisWellProfileEntity)
export class SonrisWellProfileRepository extends BaseRepository<
  SonrisWellProfileEntity,
  SonrisWellProfileSerializer
> {
  async store(
    createSonrisWellProfileDto: CreateSonrisWellProfileDto
  ): Promise<SonrisWellProfileSerializer> {
    const sonrisWellProfile = this.create(createSonrisWellProfileDto);
    await sonrisWellProfile.save();
    return this.transform(sonrisWellProfile);
  }

  async updateItem(
    sonris: SonrisWellProfileEntity,
    updateSonrisWellProfileDto: UpdateSonrisWellProfileDto
  ): Promise<SonrisWellProfileSerializer> {
    const fields = [
      'operator_name',
      'operator_id',
      'field_id',
      'field_name',
      'well_serial_num',
      'well_name',
      'well_num',
      'lease_num',
      'well_status_code',
      'well_status_code_descr',
      'classification',
      'api_num',
      'effective_date',
      'permit_date',
      'spud_date',
      'well_status_date',
      'section',
      'township',
      'range',
      'meridian',
      'parish_code',
      'parish_name',
      'district_code',
      'district_name',
      'ground_elevation',
      'latitude',
      'longitude',
      'product_type_code',
      'product_type_code_descr',
      'usdw_value',
      'area_usdw_value',
      'source_area_usdw_value',
      'rec_status',
      'updated_by',
      'updatedAt'
    ];
    for (const field of fields) {
      if (updateSonrisWellProfileDto[field]) {
        sonris[field] = updateSonrisWellProfileDto[field];
      }
    }
    await sonris.save();
    return this.transform(sonris);
  }
  pharseFilterQuery(searchFilter, searchCriteria) {
    const whereCondition = [];
    if (searchFilter.hasOwnProperty('keywords') && searchFilter.keywords) {
      for (const key of searchCriteria) {
        if (key === 'parish_code' || key === 'district_code') {
          if (!isNaN(parseInt(searchFilter.keywords))) {
            const val = parseInt(`${searchFilter.keywords}`);
            whereCondition.push({
              [key]: Number(val)
            });
          }
        } else if (
          key === 'effective_date' ||
          key === 'permit_date' ||
          key === 'spud_date'
        ) {
          if (!isNaN(searchFilter.keywords)) {
            const val = new Date(`${searchFilter.keywords}`);
            whereCondition.push({
              [key]: val
            });
          }
        } else {
          whereCondition.push({
            [key]: ILike(`%${searchFilter.keywords}%`)
          });
        }
      }
      return whereCondition;
    } else if (
      (searchFilter.hasOwnProperty('operator_name') &&
        searchFilter.operator_name) ||
      (searchFilter.hasOwnProperty('field_name') && searchFilter.field_name) ||
      (searchFilter.hasOwnProperty('well_serial_num') &&
        searchFilter.well_serial_num) ||
      (searchFilter.hasOwnProperty('well_name') && searchFilter.well_name) ||
      (searchFilter.hasOwnProperty('well_num') && searchFilter.well_num) ||
      (searchFilter.hasOwnProperty('lease_num') && searchFilter.lease_num) ||
      (searchFilter.hasOwnProperty('well_status_code') &&
        searchFilter.well_status_code) ||
      (searchFilter.hasOwnProperty('well_status_code_descr') &&
        searchFilter.well_status_code_descr) ||
      (searchFilter.hasOwnProperty('well_class_type_code') &&
        searchFilter.well_class_type_code) ||
      (searchFilter.hasOwnProperty('well_class_type_code_descr') &&
        searchFilter.well_class_type_code_descr) ||
      (searchFilter.hasOwnProperty('api_num') && searchFilter.api_num) ||
      (searchFilter.hasOwnProperty('effective_date') &&
        searchFilter.effective_date) ||
      (searchFilter.hasOwnProperty('permit_date') &&
        searchFilter.permit_date) ||
      (searchFilter.hasOwnProperty('spud_date') && searchFilter.spud_date) ||
      (searchFilter.hasOwnProperty('section') && searchFilter.section) ||
      (searchFilter.hasOwnProperty('township') && searchFilter.township) ||
      (searchFilter.hasOwnProperty('range') && searchFilter.range) ||
      (searchFilter.hasOwnProperty('parish_code') &&
        searchFilter.parish_code) ||
      (searchFilter.hasOwnProperty('district_code') &&
        searchFilter.district_code)
    ) {
      if (!isNaN(parseInt(searchFilter['parish_code']))) {
        whereCondition.push({
          parish_code: parseInt(searchFilter['parish_code'])
        });
      }
      if (!isNaN(parseInt(searchFilter['district_code']))) {
        whereCondition.push({
          district_code: parseInt(searchFilter['district_code'])
        });
      }
      if (
        searchFilter['operator_name'] !== undefined ||
        searchFilter['field_name'] !== undefined ||
        searchFilter['well_serial_num'] !== undefined ||
        searchFilter['well_name'] !== undefined ||
        searchFilter['lease_num'] !== undefined ||
        searchFilter['well_status_code'] !== undefined ||
        searchFilter['well_status_code_descr'] !== undefined ||
        searchFilter['well_class_type_code'] !== undefined ||
        searchFilter['well_class_type_code_descr'] !== undefined ||
        searchFilter['api_num'] !== undefined ||
        searchFilter['section'] !== undefined ||
        searchFilter['township'] !== undefined ||
        searchFilter['range'] !== undefined ||
        searchFilter['effective_date'] !== undefined ||
        searchFilter['permit_date'] !== undefined ||
        searchFilter['spud_date'] !== undefined
      ) {
        whereCondition.push({
          operator_name: ILike(`%${searchFilter['operator_name']}%`),
          field_name: ILike(`%${searchFilter['field_name']}%`),
          well_serial_num: ILike(`%${searchFilter['well_serial_num']}%`),
          well_name: ILike(`%${searchFilter['well_name']}%`),
          well_num: ILike(`%${searchFilter['well_num']}%`),
          lease_num: ILike(`%${searchFilter['lease_num']}%`),
          well_status_code: ILike(`%${searchFilter['well_status_code']}%`),
          well_status_code_descr: ILike(
            `%${searchFilter['well_status_code_descr']}%`
          ),
          well_class_type_code: ILike(
            `%${searchFilter['well_class_type_code']}%`
          ),
          well_class_type_code_descr: ILike(
            `%${searchFilter['well_class_type_code_descr']}%`
          ),
          api_num: ILike(`%${searchFilter['api_num']}%`),
          effective_date: new Date(searchFilter['effective_date']),
          permit_date: new Date(searchFilter['permit_date']),
          spud_date: new Date(searchFilter['spud_date']),
          section: ILike(`%${searchFilter['section']}%`),
          township: ILike(`%${searchFilter['township']}%`),
          range: ILike(`%${searchFilter['range']}%`)
        });
      }
      const condition = whereCondition.reduce((acc, val) => {
        const key = Object.keys(val)[0];
        const value = Object.values(val)[0];
        acc[key] = acc[key] ? [...acc[key], value] : value;
        return acc;
      }, {});
      // console.log(condition);

      // console.log(whereCondition);
      return condition;
    }
  }

  /**
   * transform single vol
   * @param model
   * @param transformOption
   */
  transform(
    model: SonrisWellProfileEntity,
    transformOption = {}
  ): SonrisWellProfileSerializer {
    return plainToClass(
      SonrisWellProfileSerializer,
      classToPlain(model, transformOption),
      transformOption
    );
  }

  /**
   * transform array of roles
   * @param models
   * @param transformOption
   */
  transformMany(
    models: SonrisWellProfileEntity[],
    transformOption = {}
  ): SonrisWellProfileSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
