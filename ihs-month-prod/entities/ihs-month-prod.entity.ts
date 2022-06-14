import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'ihs_month_prod' })
export class IHSMonthProdEntity extends CustomBaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.createProds)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateProds)
  updated_by: UserEntity;

  @Column({ type: 'varchar', length: 20, nullable: true })
  entity: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  entity_type: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  primary_product: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  lease_name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  well_num: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  api: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  regulatory_api: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  operator_name: string;

  @Column({ type: 'int', width: 4, nullable: true })
  year: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  month: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
  })
  liquid: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
  })
  gas: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    default: 0.0
  })
  water: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 4,
    default: 0.0
  })
  ratio_gas_oil: number;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 4,
    default: 0.0
  })
  percent_water: number;

  @Column({ type: 'int', width: 4, nullable: true })
  wells: number;

  @Column({ type: 'int', width: 6, nullable: true })
  days_on: number;

  @Column({ type: 'varchar', length: 5, nullable: true })
  rec_status: string;
}
