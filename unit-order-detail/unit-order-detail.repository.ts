import { EntityRepository } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';

import { UnitOrderDetailEntity } from './entities/unit-order-detail.entity';
import { UnitOrderDetailSerializer } from './serializer/unit-order-detail.serializer';
import { CreateUnitOrderDetailDto } from './dto/create-unit-order-detail.dto';
import { UpdateUnitOrderDetailDto } from './dto/update-unit-order-detail.dto';

@EntityRepository(UnitOrderDetailEntity)
export class UnitOrderDetailRepository extends BaseRepository<
  UnitOrderDetailEntity,
  UnitOrderDetailSerializer
> {
  async store(
    createUnitOrderDetailDto: CreateUnitOrderDetailDto
  ): Promise<UnitOrderDetailSerializer> {
    const unitOrderDetail = this.create(createUnitOrderDetailDto);
    await unitOrderDetail.save();
    return this.transform(unitOrderDetail);
  }

  async updateItem(
    UnitOrderDetail: UnitOrderDetailEntity,
    updateUnitOrderDetailDto: UpdateUnitOrderDetailDto
  ): Promise<UnitOrderDetailSerializer> {
    const fields = [
      'tract_no',
      'gross_area_in_acres',
      'net_area_in_acres',
      'pct_of_unit',
      'interest_type',
      'ownership_display_name',
      'cur_notes',
      'rec_status',
      'updated_by',
      'updatedAt'
    ];
    for (const field of fields) {
      if (updateUnitOrderDetailDto[field]) {
        UnitOrderDetail[field] = updateUnitOrderDetailDto[field];
      }
    }
    await UnitOrderDetail.save();
    return this.transform(UnitOrderDetail);
  }

  /**
   * transform single vol
   * @param model
   * @param transformOption
   */
  transform(
    model: UnitOrderDetailEntity,
    transformOption = {}
  ): UnitOrderDetailSerializer {
    return plainToClass(
      UnitOrderDetailSerializer,
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
    models: UnitOrderDetailEntity[],
    transformOption = {}
  ): UnitOrderDetailSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
