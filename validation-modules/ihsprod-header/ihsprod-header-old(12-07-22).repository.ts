import { EntityRepository, ILike } from 'typeorm';
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
      if (!isNaN(parseInt(searchFilter['lease_number']))) {
        whereCondition.push({
          lease_number: parseInt(searchFilter['lease_number'])
        });
      }
      if (searchFilter['api']) {
        whereCondition.push({
          api: ILike(`%${searchFilter['api']}%`)
        });
      }
      if (searchFilter['primary_product']) {
        whereCondition.push({
          primary_product: ILike(`%${searchFilter['primary_product']}%`)
        });
      }
      if (searchFilter['province_state_name']) {
        whereCondition.push({
          province_state_name: ILike(`%${searchFilter['province_state_name']}%`)
        });
      }
      if (searchFilter['district_name']) {
        whereCondition.push({
          district_name: ILike(`%${searchFilter['district_name']}%`)
        });
      }
      if (searchFilter['county_name']) {
        whereCondition.push({
          county_name: ILike(`%${searchFilter['county_name']}%`)
        });
      }
      if (searchFilter['operator_name']) {
        whereCondition.push({
          operator_name: ILike(`%${searchFilter['operator_name']}%`)
        });
      }
      if (searchFilter['operator_city']) {
        whereCondition.push({
          operator_city: ILike(`%${searchFilter['operator_city']}%`)
        });
      }
      if (searchFilter['field_name']) {
        whereCondition.push({
          field_name: ILike(`%${searchFilter['field_name']}%`)
        });
      }
      if (searchFilter['lease_name']) {
        whereCondition.push({
          lease_name: ILike(`%${searchFilter['lease_name']}%`)
        });
      }
      if (searchFilter['well_num']) {
        whereCondition.push({
          well_num: ILike(`%${searchFilter['well_num']}%`)
        });
      }
      if (searchFilter['location']) {
        whereCondition.push({
          location: ILike(`%${searchFilter['location']}%`)
        });
      }
      const condition = whereCondition.reduce((acc, val) => {
        const key = Object.keys(val)[0];
        const value = Object.values(val)[0];
        acc[key] = acc[key] ? [...acc[key], value] : value;
        return acc;
      }, {});
      //console.log(condition);
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
