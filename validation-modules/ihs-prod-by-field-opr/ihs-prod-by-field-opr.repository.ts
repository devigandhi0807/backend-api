import { EntityRepository, ILike } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';
import { IHSProdByFieldOprEntity } from './entities/ihs-prod-by-field-opr.entity';
import { IHSProdByFieldOprSerializer } from './serializer/ihs-prod-by-field-opr.serializer';
import { CreateIHSProdByFieldOprDto } from './dto/create-ihs-prod-by-field-opr.dto';
import { UpdateIHSProdByFieldOprDto } from './dto/update-ihs-prod-by-field-opr.dto';

@EntityRepository(IHSProdByFieldOprEntity)
export class IHSProdByFieldOprRepository extends BaseRepository<
  IHSProdByFieldOprEntity,
  IHSProdByFieldOprSerializer
> {
  async store(
    createIHSProdByFieldOprDto: CreateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const ihsProdByFieldOpr = this.create(createIHSProdByFieldOprDto);
    await ihsProdByFieldOpr.save();
    return this.transform(ihsProdByFieldOpr);
  }

  async updateItem(
    fieldOpr: IHSProdByFieldOprEntity,
    updateIHSProdByFieldOprDto: UpdateIHSProdByFieldOprDto
  ): Promise<IHSProdByFieldOprSerializer> {
    const fields = [
      'summary',
      'source',
      'production_id',
      'entity_type',
      'api',
      'lease_name',
      'well_num',
      'operator_name',
      'location',
      'field_name',
      'state',
      'country_name',
      'basin',
      'play_name',
      'production_status',
      'resv_onshore',
      'resv_offshore',
      'lease_code',
      'oil_cum',
      'gas_cum',
      'wtr_cum',
      'oil_ytd',
      'gas_ytd',
      'wtr_ytd',
      'oil_latest_mo',
      'gas_latest_mo',
      'gas_latest_mo',
      'active_num_wells',
      'first_prod_date',
      'last_prod_date',
      'td',
      'tvd',
      'upper_perf',
      'lower_perf',
      'oil_gatherer',
      'gas_gatherer',
      'latitude',
      'longitude',
      'l_and_l_srce',
      'rec_status',
      'updated_by',
      'updatedAt'
    ];
    for (const field of fields) {
      if (updateIHSProdByFieldOprDto[field]) {
        fieldOpr[field] = updateIHSProdByFieldOprDto[field];
      }
    }
    await fieldOpr.save();
    return this.transform(fieldOpr);
  }

  pharseFilterQuery(searchFilter, searchCriteria) {
    const whereCondition = [];
    if (searchFilter.hasOwnProperty('keywords') && searchFilter.keywords) {
      for (const key of searchCriteria) {
        whereCondition.push({
          [key]: ILike(`%${searchFilter.keywords}%`)
        });
      }
    } else if (
      (searchFilter.hasOwnProperty('api') && searchFilter.api) ||
      (searchFilter.hasOwnProperty('lease_name') && searchFilter.lease_name) ||
      (searchFilter.hasOwnProperty('well_num') && searchFilter.well_num) ||
      (searchFilter.hasOwnProperty('operator_name') &&
        searchFilter.operator_name) ||
      (searchFilter.hasOwnProperty('location') && searchFilter.location) ||
      (searchFilter.hasOwnProperty('field_name') && searchFilter.field_name) ||
      (searchFilter.hasOwnProperty('state') && searchFilter.state) ||
      (searchFilter.hasOwnProperty('county_name') &&
        searchFilter.county_name) ||
      (searchFilter.hasOwnProperty('basin') && searchFilter.basin) ||
      (searchFilter.hasOwnProperty('play_name') && searchFilter.play_name) ||
      (searchFilter.hasOwnProperty('production_status') &&
        searchFilter.production_status)
    ) {
      for (const key of searchCriteria) {
        whereCondition.push({
          [key]: ILike(`%${searchFilter[key]}%`)
        });
      }
    }
    return whereCondition;
  }
  /**
   * transform single vol
   * @param model
   * @param transformOption
   */
  transform(
    model: IHSProdByFieldOprEntity,
    transformOption = {}
  ): IHSProdByFieldOprSerializer {
    return plainToClass(
      IHSProdByFieldOprSerializer,
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
    models: IHSProdByFieldOprEntity[],
    transformOption = {}
  ): IHSProdByFieldOprSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}