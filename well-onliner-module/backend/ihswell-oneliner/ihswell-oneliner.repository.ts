import { EntityRepository, ILike, In } from 'typeorm';
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
      return whereCondition;
    } else if (
      (searchFilter.hasOwnProperty('source') && searchFilter.source) ||
      (searchFilter.hasOwnProperty('api_number') && searchFilter.api_number) ||
      (searchFilter.hasOwnProperty('operator_name') &&
        searchFilter.operator_name) ||
      (searchFilter.hasOwnProperty('current_operator_city') &&
        searchFilter.current_operator_city) ||
      (searchFilter.hasOwnProperty('basin_code') && searchFilter.basin_code)
    ) {
      if (searchFilter['source']) {
        const source_values = searchFilter['source'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          //primary_product: ILike(`%${searchFilter['primary_product']}%`)
          source: In([...source_values])
        });
      }
      if (searchFilter['api_number']) {
        const api_values = searchFilter['api_number'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          //primary_product: ILike(`%${searchFilter['primary_product']}%`)
          api_number: In([...api_values])
        });
      }

      if (searchFilter['operator_name']) {
        const opn_values = searchFilter['operator_name']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          //primary_product: ILike(`%${searchFilter['primary_product']}%`)
          operator_name: In([...opn_values])
        });
      }
      if (searchFilter['current_operator_city']) {
        const coc_values = searchFilter['current_operator_city']
          .split(',')
          .map((val) => {
            return val.trim();
          });
        whereCondition.push({
          //primary_product: ILike(`%${searchFilter['primary_product']}%`)
          current_operator_city: In([...coc_values])
        });
      }
      if (searchFilter['basin_code']) {
        const bc_values = searchFilter['basin_code'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          //primary_product: ILike(`%${searchFilter['primary_product']}%`)
          basin_code: In([...bc_values])
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
