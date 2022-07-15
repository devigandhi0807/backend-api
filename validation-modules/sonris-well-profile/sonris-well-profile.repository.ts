import {
  EntityRepository,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual
} from 'typeorm';
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
        const pc_values = searchFilter['parish_code'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          parish_code: In([...pc_values])
        });
      }
      if (!isNaN(parseInt(searchFilter['district_code']))) {
        const dc_values = searchFilter['district_code']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          district_code: In([...dc_values])
        });
      }

      if (
        !isNaN(parseInt(searchFilter['parish_code'])) &&
        searchFilter['parish_code'].includes('>')
      ) {
        if (searchFilter['parish_code'].startsWith('=', 1)) {
          const parish_code = parseInt(
            searchFilter['parish_code'].substring(2)
          );
          whereCondition.push({
            parish_code: MoreThanOrEqual(parish_code)
          });
        } else {
          const parish_code = parseInt(
            searchFilter['parish_code'].substring(1)
          );
          whereCondition.push({
            parish_code: MoreThan(parish_code)
          });
        }
      }

      if (
        !isNaN(parseInt(searchFilter['parish_code'])) &&
        searchFilter['parish_code'].includes('<')
      ) {
        if (searchFilter['parish_code'].startsWith('=', 1)) {
          const parish_code = parseInt(
            searchFilter['parish_code'].substring(2)
          );
          whereCondition.push({
            parish_code: LessThanOrEqual(parish_code)
          });
        } else {
          const parish_code = parseInt(
            searchFilter['parish_code'].substring(1)
          );
          whereCondition.push({
            parish_code: LessThan(parish_code)
          });
        }
      }

      if (
        !isNaN(parseInt(searchFilter['district_code'])) &&
        searchFilter['district_code'].includes('>')
      ) {
        if (searchFilter['district_code'].startsWith('=', 1)) {
          const district_code = parseInt(
            searchFilter['district_code'].substring(2)
          );
          whereCondition.push({
            district_code: MoreThanOrEqual(district_code)
          });
        } else {
          const district_code = parseInt(
            searchFilter['district_code'].substring(1)
          );
          whereCondition.push({
            district_code: MoreThan(district_code)
          });
        }
      }

      if (
        !isNaN(parseInt(searchFilter['district_code'])) &&
        searchFilter['district_code'].includes('<')
      ) {
        if (searchFilter['district_code'].startsWith('=', 1)) {
          const district_code = parseInt(
            searchFilter['district_code'].substring(2)
          );
          whereCondition.push({
            district_code: LessThanOrEqual(district_code)
          });
        } else {
          const district_code = parseInt(
            searchFilter['district_code'].substring(1)
          );
          whereCondition.push({
            district_code: LessThan(district_code)
          });
        }
      }

      if (searchFilter['operator_name']) {
        const on_values = searchFilter['operator_name']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          operator_name: In([...on_values])
        });
      }
      if (searchFilter['field_name']) {
        const fn_values = searchFilter['field_name'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          field_name: In([...fn_values])
        });
      }
      if (searchFilter['well_serial_num']) {
        const wsn_values = searchFilter['well_serial_num']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          well_serial_num: In([...wsn_values])
        });
      }
      if (searchFilter['well_name']) {
        const wn_values = searchFilter['well_name'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          well_name: In([...wn_values])
        });
      }
      if (searchFilter['well_num']) {
        const wnum_values = searchFilter['well_num'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          well_num: In([...wnum_values])
        });
      }
      if (searchFilter['lease_num']) {
        const lnum_values = searchFilter['lease_num'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          lease_num: In([...lnum_values])
        });
      }
      if (searchFilter['well_status_code']) {
        const wsc_values = searchFilter['well_status_code']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          well_status_code: In([...wsc_values])
        });
      }
      if (searchFilter['well_status_code_descr']) {
        const wscd_values = searchFilter['well_status_code_descr']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          well_status_code_descr: In([...wscd_values])
        });
      }
      if (searchFilter['well_class_type_code']) {
        const wctc_values = searchFilter['well_class_type_code']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          well_class_type_code: In([...wctc_values])
        });
      }
      if (searchFilter['well_class_type_code_descr']) {
        const wctcd_values = searchFilter['well_class_type_code_descr']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          well_class_type_code_descr: In([...wctcd_values])
        });
      }
      if (searchFilter['api_num']) {
        const anum_values = searchFilter['api_num'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          api_num: In([...anum_values])
        });
      }
      if (searchFilter['section']) {
        const section_values = searchFilter['section'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          section: In([...section_values])
        });
      }
      if (searchFilter['township']) {
        const town_values = searchFilter['township'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          township: In([...town_values])
        });
      }
      if (searchFilter['range']) {
        const range_values = searchFilter['range'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          range: In([...range_values])
        });
      }
      if (
        searchFilter['effective_date'] &&
        !(
          searchFilter['effective_date'].includes('>') ||
          searchFilter['effective_date'].includes('<')
        )
      ) {
        // console.log(new Date(searchFilter['effective_date']).toString());
        // console.log(
        //   new Date(searchFilter['effective_date']).toString().substring(0, 24)
        // );
        // whereCondition.push({
        //   effective_date: new Date(searchFilter['effective_date'])
        //     .toString()
        //     .substring(0, 24)
        // });

        const ef_values = searchFilter['effective_date']
          .split(',')
          .map((val) => {
            return new Date(val.trim());
          });
        whereCondition.push({
          effective_date: In([...ef_values])
        });
      }

      if (
        searchFilter['effective_date'] &&
        searchFilter['effective_date'].includes('>')
      ) {
        if (searchFilter['effective_date'].startsWith('=', 1)) {
          const effective_date = searchFilter['effective_date'].substring(2);

          whereCondition.push({
            effective_date: MoreThanOrEqual(new Date(effective_date.trim()))
          });
        } else {
          const effective_date = searchFilter['effective_date'].substring(1);

          whereCondition.push({
            effective_date: MoreThan(new Date(effective_date.trim()))
          });
        }
      }

      if (
        searchFilter['effective_date'] &&
        searchFilter['effective_date'].includes('<')
      ) {
        if (searchFilter['effective_date'].startsWith('=', 1)) {
          const effective_date = searchFilter['effective_date'].substring(2);

          whereCondition.push({
            effective_date: LessThanOrEqual(new Date(effective_date.trim()))
          });
        } else {
          const effective_date = searchFilter['effective_date'].substring(1);

          whereCondition.push({
            effective_date: LessThan(new Date(effective_date.trim()))
          });
        }
      }
      if (
        searchFilter['permit_date'] &&
        !(
          searchFilter['permit_date'].includes('>') ||
          searchFilter['permit_date'].includes('<')
        )
      ) {
        const pt_values = searchFilter['permit_date'].split(',').map((val) => {
          return new Date(val.trim());
        });
        whereCondition.push({
          effective_date: In([...pt_values])
        });
      }
      if (
        searchFilter['permit_date'] &&
        searchFilter['permit_date'].includes('>')
      ) {
        if (searchFilter['permit_date'].startsWith('=', 1)) {
          const permit_date = searchFilter['permit_date'].substring(2);

          whereCondition.push({
            permit_date: MoreThanOrEqual(new Date(permit_date.trim()))
          });
        } else {
          const permit_date = searchFilter['permit_date'].substring(1);

          whereCondition.push({
            permit_date: MoreThan(new Date(permit_date.trim()))
          });
        }
      }
      if (
        searchFilter['permit_date'] &&
        searchFilter['permit_date'].includes('<')
      ) {
        if (searchFilter['permit_date'].startsWith('=', 1)) {
          const permit_date = searchFilter['permit_date'].substring(2);

          whereCondition.push({
            permit_date: LessThanOrEqual(new Date(permit_date.trim()))
          });
        } else {
          const permit_date = searchFilter['permit_date'].substring(1);

          whereCondition.push({
            permit_date: LessThan(new Date(permit_date.trim()))
          });
        }
      }
      if (
        searchFilter['spud_date'] &&
        !(
          searchFilter['spud_date'].includes('>') ||
          searchFilter['spud_date'].includes('<')
        )
      ) {
        const sd_values = searchFilter['spud_date'].split(',').map((val) => {
          return new Date(val.trim());
        });
        whereCondition.push({
          spud_date: In([...sd_values])
        });
      }
      if (
        searchFilter['spud_date'] &&
        searchFilter['spud_date'].includes('<')
      ) {
        if (searchFilter['spud_date'].startsWith('=', 1)) {
          const spud_date = searchFilter['spud_date'].substring(2);

          whereCondition.push({
            spud_date: LessThanOrEqual(new Date(spud_date.trim()))
          });
        } else {
          const spud_date = searchFilter['spud_date'].substring(1);

          whereCondition.push({
            spud_date: LessThan(new Date(spud_date.trim()))
          });
        }
      }
      if (
        searchFilter['spud_date'] &&
        searchFilter['spud_date'].includes('>')
      ) {
        if (searchFilter['spud_date'].startsWith('=', 1)) {
          const spud_date = searchFilter['spud_date'].substring(2);

          whereCondition.push({
            spud_date: MoreThanOrEqual(new Date(spud_date.trim()))
          });
        } else {
          const spud_date = searchFilter['spud_date'].substring(1);

          whereCondition.push({
            spud_date: MoreThan(new Date(spud_date.trim()))
          });
        }
      }
      const condition = whereCondition.reduce((acc, val) => {
        const key = Object.keys(val)[0];
        const value = Object.values(val)[0];
        acc[key] = acc[key] ? [...acc[key], value] : value;
        return acc;
      }, {});

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
