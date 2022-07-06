import { EntityRepository, ILike } from 'typeorm';
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
        whereCondition.push({
          county_name: searchFilter['county_name']
        });
      }
      if (searchFilter['operator_name']) {
        whereCondition.push({
          operator_name: ILike(`%${searchFilter['operator_name']}%`)
        });
      }
      if (searchFilter['township']) {
        whereCondition.push({
          township: ILike(`%${searchFilter['township']}%`)
        });
      }
      if (searchFilter['section']) {
        whereCondition.push({
          section: ILike(`%${searchFilter['section']}%`)
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
