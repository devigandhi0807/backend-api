import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'ihs_lease_vol' })
export class IHSLeaseVolEntity extends CustomBaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.vols)
  user: UserEntity;

  @Column({ type: 'varchar', length: 80, nullable: true })
  map_symbol: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  primary_api: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  lease_name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  well_num: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
    //transformer: new DecimalTransformer()
  })
  //@Transform(() => DecimalToString, { toPlainOnly: true })
  gas_cum: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
    //transformer: new DecimalTransformer()
  })
  oil_cum: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
    //transformer: new DecimalTransformer()
  })
  gas_ytd: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
    // transformer: new DecimalTransformer()
  })
  oil_ytd: number;

  @Column({ type: 'varchar', length: 5, nullable: true })
  rec_status: string;
  @Column({ type: 'varchar', length: 30, nullable: true })
  created_by: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  updated_by: string;
}
