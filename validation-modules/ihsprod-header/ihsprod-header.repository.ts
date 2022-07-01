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
      for (const key of searchCriteria) {
        if (key === 'lease_number') {
          if (!isNaN(parseInt(searchFilter[key]))) {
            const val = parseInt(`${searchFilter[key]}`);

            whereCondition.push({
              [key]: Number(val)
            });
          }
        } else {
          whereCondition.push({
            [key]: ILike(`%${searchFilter[key]}%`)
          });
        }
      }
    }
    //console.log(whereCondition);
    return whereCondition;
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
