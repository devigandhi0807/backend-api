import { EntityRepository } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { BaseRepository } from 'src/common/repository/base.repository';

import { IHSLeaseVolEntity } from './entities/ihslease-vol.entity';
import { IHSLeaseVolSerializer } from './serializer/ihslease-vol.serializer';
import { CreateIHSLeaseVolDto } from './dto/create-ihslease-vol.dto';

@EntityRepository(IHSLeaseVolEntity)
export class IHSLeaseVolRepository extends BaseRepository<
  IHSLeaseVolEntity,
  IHSLeaseVolSerializer
> {
  async store(
    createIHSLeaseVolDto: CreateIHSLeaseVolDto
  ): Promise<IHSLeaseVolSerializer> {
    const ihsLeaseVol = this.create(createIHSLeaseVolDto);
    await ihsLeaseVol.save();
    return this.transform(ihsLeaseVol);
  }

  async updateItem(
    vol: IHSLeaseVolEntity,
    updateIHSLeaseVolDto: CreateIHSLeaseVolDto
  ): Promise<IHSLeaseVolSerializer> {
    const fields = [
      'user',
      'map_symbol',
      'source',
      'primary_api',
      'lease_name',
      'well_num',
      'gas_cum',
      'oil_cum',
      'gas_ytd',
      'oil_ytd',
      'rec_status',
      'created_by',
      'updated_by'
    ];
    for (const field of fields) {
      if (updateIHSLeaseVolDto[field]) {
        vol[field] = updateIHSLeaseVolDto[field];
      }
    }
    await vol.save();
    return this.transform(vol);
  }

  /**
   * transform single vol
   * @param model
   * @param transformOption
   */
  transform(
    model: IHSLeaseVolEntity,
    transformOption = {}
  ): IHSLeaseVolSerializer {
    return plainToClass(
      IHSLeaseVolSerializer,
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
    models: IHSLeaseVolEntity[],
    transformOption = {}
  ): IHSLeaseVolSerializer[] {
    return models.map((model) => this.transform(model, transformOption));
  }
}
