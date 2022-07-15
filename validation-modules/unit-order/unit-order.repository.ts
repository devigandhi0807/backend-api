import { EntityRepository, ILike, In } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';

import { UnitOrderEntity } from './entities/unit-order.entity';
import { UnitOrderSerializer } from './serializer/unit-order.serializer';
import { CreateUnitOrderDto } from './dto/create-unit-order.dto';
import { UpdateUnitOrderDto } from './dto/update-unit-order.dto';

@EntityRepository(UnitOrderEntity)
export class UnitOrderRepository extends BaseRepository<
  UnitOrderEntity,
  UnitOrderSerializer
> {
  async store(
    createUnitOrderDto: CreateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    const unitOrder = this.create(createUnitOrderDto);
    await unitOrder.save();
    return this.transform(unitOrder);
  }

  async updateItem(
    unit: UnitOrderEntity,
    updateUnitOrderDto: UpdateUnitOrderDto
  ): Promise<UnitOrderSerializer> {
    const fields = [
      'operator_name',
      'county_name',
      'section',
      'township',
      'range',
      'unit_order_link',
      'State',
      'rec_status',
      'updated_by',
      'updatedAt'
    ];
    for (const field of fields) {
      if (updateUnitOrderDto[field]) {
        unit[field] = updateUnitOrderDto[field];
      }
    }
    await unit.save();
    return this.transform(unit);
  }

  pharseFilterQuery(searchFilter, searchCriteria) {
    const whereCondition = [];
    if (searchFilter.hasOwnProperty('keywords') && searchFilter.keywords) {
      for (const key of searchCriteria) {
        whereCondition.push({
          [key]: ILike(`%${searchFilter[key]}%`)
        });
      }
      return whereCondition;
    } else if (
      (searchFilter.hasOwnProperty('operator_name') &&
        searchFilter.operator_name) ||
      (searchFilter.hasOwnProperty('township') && searchFilter.township) ||
      (searchFilter.hasOwnProperty('section') && searchFilter.section) ||
      (searchFilter.hasOwnProperty('county_name') && searchFilter.county_name)
    ) {
      if (searchFilter['county_name']) {
        const cn_values = searchFilter['county_name'].split('-').map((val) => {
          return '{' + val.trim() + '}';
        });
        whereCondition.push({
          county_name: In([...cn_values])
        });
        // whereCondition.push({
        //   county_name: searchFilter['county_name']
        // });
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
      if (searchFilter['township']) {
        const town_values = searchFilter['township'].split(',').map((val) => {
          return val.trim();
        });
        whereCondition.push({
          township: In([...town_values])
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
  transform(model: UnitOrderEntity, transformOption = {}): UnitOrderSerializer {
    return plainToClass(
      UnitOrderSerializer,
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
    models: UnitOrderEntity[],
    transformOption = {}
  ): UnitOrderSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
