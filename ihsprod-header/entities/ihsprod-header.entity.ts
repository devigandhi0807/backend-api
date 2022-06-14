import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'ihs_prod_header' })
export class IHSProdHeaderEntity extends CustomBaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.createHeaders)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateHeaders)
  updated_by: UserEntity;

  @Column({ type: 'varchar', length: 20, nullable: true })
  entity: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  api: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  entity_type: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  primary_product: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  country_name: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  province_state_name: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  district_name: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  county_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  os_indicator: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  basin: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  operator_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  operator_city: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  field_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  prod_zone_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  lease_name: string;

  @Column({ type: 'int8', width: 10, nullable: true })
  lease_number: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  well_num: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  gatherer_gas: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  gatherer_gas_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  gatherer_liquid: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  gatherer_liquid_name: string;

  @Column({
    type: 'timestamptz'
    //default: () => 'CURRENT_TIMESTAMP'
  })
  status_date: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  status_current_name: string;

  @Column({
    type: 'timestamptz'
    //default: () => 'CURRENT_TIMESTAMP'
  })
  date_production_start: Date;

  @Column({
    type: 'timestamptz'
  })
  date_production_stop: Date;

  @Column({
    type: 'timestamptz'
  })
  date_injection_start: Date;

  @Column({
    type: 'timestamptz'
  })
  date_injection_stop: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  pool_name: string;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 4,
    default: 0.0
  })
  temperature_gradient: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  n_factor: string;

  @Column({ type: 'varchar', length: 5, default: 'A' })
  rec_status: string;

  // @Column({ type: 'varchar', length: 30, nullable: true })
  // created_by: string;

  // @Column({ type: 'varchar', length: 30, nullable: true })
  // updated_by: string;
}
