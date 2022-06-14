import { EntityRepository } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';

import { IHSMonthProdEntity } from './entities/ihs-month-prod.entity';
import { IHSMonthProdSerializer } from './serializer/ihs-month-prod.serializer';
import { CreateIHSMonthProdDto } from './dto/create-ihs-month-prod.dto';
import { UpdateIHSMonthProdDto } from './dto/update-ihs-month-prod.dto';

@EntityRepository(IHSMonthProdEntity)
export class IHSMonthProdRepository extends BaseRepository<
  IHSMonthProdEntity,
  IHSMonthProdSerializer
> {
  async store(
    createIHSMonthProdDto: CreateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const ihsMonthProd = this.create(createIHSMonthProdDto);
    await ihsMonthProd.save();
    return this.transform(ihsMonthProd);
  }

  async updateItem(
    prod: IHSMonthProdEntity,
    updateIHSLeaseVolDto: UpdateIHSMonthProdDto
  ): Promise<IHSMonthProdSerializer> {
    const fields = [
      'entity',
      'source',
      'entity_type',
      'primary_product',
      'lease_name',
      'well_num',
      'api',
      'regulatory_api',
      'operator_name',
      'year',
      'month',
      'liquid',
      'gas',
      'water',
      'ratio_gas_oil',
      'percent_water',
      'wells',
      'days_on',
      'rec_status',
      'updated_by',
      'updatedAt'
    ];
    for (const field of fields) {
      if (updateIHSLeaseVolDto[field]) {
        prod[field] = updateIHSLeaseVolDto[field];
      }
    }
    await prod.save();
    return this.transform(prod);
  }

  /**
   * transform single vol
   * @param model
   * @param transformOption
   */
  transform(
    model: IHSMonthProdEntity,
    transformOption = {}
  ): IHSMonthProdSerializer {
    return plainToClass(
      IHSMonthProdSerializer,
      classToPlain(model, transformOption),
      transformOption
    );
  }

  /**
   * transform array of prods
   * @param models
   * @param transformOption
   */
  transformMany(
    models: IHSMonthProdEntity[],
    transformOption = {}
  ): IHSMonthProdSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
