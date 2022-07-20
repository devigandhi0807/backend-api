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
import { CreateIHSProdHeaderDto } from './dto/create-ihsprod-header.dto';
import { IHSProdHeaderEntity } from './entities/ihsprod-header.entity';
import { IHSProdHeaderSerializer } from './serializer/ihsprod-header.serializer';
import { UpdateIHSProdHeaderDto } from './dto/update-ihsprod-header.dto';

@EntityRepository(IHSProdHeaderEntity)
export class IHSProdHeaderRepository extends BaseRepository<
  IHSProdHeaderEntity,
  IHSProdHeaderSerializer
> {
  async store(
    createIHSProdHeaderDto: CreateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    const ihsProdHeader = this.create(createIHSProdHeaderDto);
    await ihsProdHeader.save();
    return this.transform(ihsProdHeader);
  }

  async updateItem(
    prodHeader: IHSProdHeaderEntity,
    updateIHSProdHeaderDto: UpdateIHSProdHeaderDto
  ): Promise<IHSProdHeaderSerializer> {
    const headers = [
      'entity',
      'api',
      'source',
      'entity_type',
      'primary_product',
      'country_name',
      'province_state_name',
      'district_name',
      'county_name',
      'os_indicator',
      'basin',
      'operator_name',
      'operator_city',
      'field_name',
      'prod_zone_name',
      'lease_name',
      'lease_number',
      'well_num',
      'location',
      'gatherer_gas',
      'gatherer_gas_name',
      'gatherer_liquid',
      'gatherer_liquid_name',
      'status_date',
      'status_current_name',
      'date_production_start',
      'date_production_stop',
      'date_injection_start',
      'date_injection_stop',
      'pool_name',
      'temperature_gradient',
      'n_factor',
      'rec_status',
      'updated_by',
      'updatedAt'
    ];
    for (const field of headers) {
      if (updateIHSProdHeaderDto[field]) {
        prodHeader[field] = updateIHSProdHeaderDto[field];
      }
    }
    await prodHeader.save();
    return this.transform(prodHeader);
  }

  pharseFilterQuery(searchFilter, searchCriteria) {
    const whereCondition = [];
    if (searchFilter.hasOwnProperty('keywords') && searchFilter.keywords) {
      for (const key of searchCriteria) {
        if (key === 'lease_number') {
          if (!isNaN(parseInt(searchFilter.keywords))) {
            const val = parseInt(`${searchFilter.keywords}`);
            whereCondition.push({
              [key]: Number(val)
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
      (searchFilter.hasOwnProperty('api') && searchFilter.api) ||
      (searchFilter.hasOwnProperty('primary_product') &&
        searchFilter.primary_product) ||
      (searchFilter.hasOwnProperty('province_state_name') &&
        searchFilter.province_state_name) ||
      (searchFilter.hasOwnProperty('district_name') &&
        searchFilter.district_name) ||
      (searchFilter.hasOwnProperty('county_name') &&
        searchFilter.county_name) ||
      (searchFilter.hasOwnProperty('operator_name') &&
        searchFilter.operator_name) ||
      (searchFilter.hasOwnProperty('operator_city') &&
        searchFilter.operator_city) ||
      (searchFilter.hasOwnProperty('field_name') && searchFilter.field_name) ||
      (searchFilter.hasOwnProperty('lease_name') && searchFilter.lease_name) ||
      (searchFilter.hasOwnProperty('lease_number') &&
        searchFilter.lease_number) ||
      (searchFilter.hasOwnProperty('well_num') && searchFilter.well_num) ||
      (searchFilter.hasOwnProperty('location') && searchFilter.location)
    ) {
      if (
        !isNaN(parseInt(searchFilter['lease_number'])) &&
        searchFilter['lease_number'].includes('>')
      ) {
        if (searchFilter['lease_number'].startsWith('=', 1)) {
          const lease_number = parseInt(
            searchFilter['lease_number'].substring(2)
          );
          whereCondition.push({
            lease_number: MoreThanOrEqual(lease_number)
          });
        } else {
          const lease_number = parseInt(
            searchFilter['lease_number'].substring(1)
          );
          whereCondition.push({
            lease_number: MoreThan(lease_number)
          });
        }
      }

      if (
        !isNaN(parseInt(searchFilter['lease_number'])) &&
        searchFilter['lease_number'].includes('<')
      ) {
        if (searchFilter['lease_number'].startsWith('=', 1)) {
          const lease_number = parseInt(
            searchFilter['lease_number'].substring(2)
          );
          whereCondition.push({
            lease_number: LessThanOrEqual(lease_number)
          });
        } else {
          const lease_number = parseInt(
            searchFilter['lease_number'].substring(1)
          );
          whereCondition.push({
            lease_number: LessThan(lease_number)
          });
        }
      }

      if (!isNaN(parseInt(searchFilter['lease_number']))) {
        const lnum_values = searchFilter['lease_number']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          lease_number: In([...lnum_values])
        });
      }
      if (searchFilter['api']) {
        const api_values = searchFilter['api'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          //api: ILike(`%${searchFilter['api']}%`)
          api: In([...api_values])
        });
      }
      if (searchFilter['primary_product']) {
        const pp_values = searchFilter['primary_product']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          //primary_product: ILike(`%${searchFilter['primary_product']}%`)
          primary_product: In([...pp_values])
        });
      }
      if (searchFilter['province_state_name']) {
        const psn_values = searchFilter['province_state_name']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          province_state_name: In([...psn_values])
        });
      }
      if (searchFilter['district_name']) {
        const dn_values = searchFilter['district_name']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          district_name: In([...dn_values])
        });
      }
      if (searchFilter['county_name']) {
        const cn_values = searchFilter['county_name'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          county_name: In([...cn_values])
        });
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
      if (searchFilter['operator_city']) {
        const oc_values = searchFilter['operator_city']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          operator_city: In([...oc_values])
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
      if (searchFilter['lease_name']) {
        const ln_values = searchFilter['lease_name'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          lease_name: In([...ln_values])
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
      if (searchFilter['location']) {
        const loc_values = searchFilter['location'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          location: In([...loc_values])
        });
      }
      const condition = whereCondition.reduce((acc, val) => {
        const key = Object.keys(val)[0];
        const value = Object.values(val)[0];
        acc[key] = acc[key] ? [...acc[key], value] : value;
        return acc;
      }, {});
      // console.log(condition);
      return condition;
    }
  }
  /**
   * transform single vol
   * @param model
   * @param transformOption
   */
  transform(
    model: IHSProdHeaderEntity,
    transformOption = {}
  ): IHSProdHeaderSerializer {
    return plainToClass(
      IHSProdHeaderSerializer,
      classToPlain(model, transformOption),
      transformOption
    );
  }

  /**
   * transform array of fieldOprs
   * @param models
   * @param transformOption
   */
  transformMany(
    models: IHSProdHeaderEntity[],
    transformOption = {}
  ): IHSProdHeaderSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
