import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'ihs_prod_by_field_opr' })
export class IHSProdByFieldOprEntity extends CustomBaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.createFieldOprs)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateFieldOprs)
  updated_by: UserEntity;

  @Column({ type: 'varchar', length: 20, nullable: true })
  summary: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  production_id: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  entity_type: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  api: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  lease_name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  well_num: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  operator_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  field_name: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  county_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  basin: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  play_name: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  production_status: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  resv_onshore: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  resv_offshore: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  lease_code: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  oil_cum: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  gas_cum: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  wtr_cum: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  oil_ytd: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  gas_ytd: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  wtr_ytd: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  oil_latest_mo: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  gas_latest_mo: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  wtr_latest_mo: number;

  @Column({ type: 'int', width: 4, nullable: true })
  active_num_wells: number;

  @Column({
    type: 'timestamptz'
  })
  first_prod_date: Date;

  @Column({
    type: 'timestamptz'
  })
  last_prod_date: Date;

  @Column({ type: 'int', width: 8, nullable: true })
  td: number;

  @Column({ type: 'int', width: 8, nullable: true })
  tvd: number;

  @Column({ type: 'int', width: 8, nullable: true })
  upper_perf: number;

  @Column({ type: 'int', width: 8, nullable: true })
  lower_perf: number;

  @Column({ type: 'varchar', length: 80, nullable: true })
  oil_gatherer: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  gas_gatherer: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 8
  })
  latitude: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 8
  })
  longitude: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  l_and_l_srce: string;

  @Column({ default: 'A' })
  rec_status: RecStatusEnum;
}
