import { EntityRepository } from 'typeorm';
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
