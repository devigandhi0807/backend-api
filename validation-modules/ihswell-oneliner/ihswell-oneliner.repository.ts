import { EntityRepository, ILike } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';
import { CreateIhswellOnelinerDto } from './dto/create-ihswell-oneliner.dto';
import { IhswellOnelinerEntity } from './entities/ihswell-oneliner.entity';
import { IhswellOnelinerSerializer } from './serializer/ihswell-oneliner.serializer';

@EntityRepository(IhswellOnelinerEntity)
export class IhswellOnelinerRepository extends BaseRepository<
  IhswellOnelinerEntity,
  IhswellOnelinerSerializer
> {
  async store(
    createIHSProdHeaderDto: CreateIhswellOnelinerDto
  ): Promise<IhswellOnelinerSerializer> {
    const ihsWellOne = this.create(createIHSProdHeaderDto);
    await ihsWellOne.save();
    return this.transform(ihsWellOne);
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
    model: IhswellOnelinerEntity,
    transformOption = {}
  ): IhswellOnelinerSerializer {
    return plainToClass(
      IhswellOnelinerSerializer,
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
    models: IhswellOnelinerEntity[],
    transformOption = {}
  ): IhswellOnelinerSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
