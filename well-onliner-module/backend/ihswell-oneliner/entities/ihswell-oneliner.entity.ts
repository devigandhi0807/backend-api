import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity({ name: 'ihs_well_one_liner' })
export class IhswellOnelinerEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
  uwi: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
  api_number: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  ic_number: string;

  @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
  regulatory_api: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  operator_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  operator_city: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  current_operator_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  current_operator_city: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  lease_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  alternate_well_name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  well_num: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  field_name: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  country_name: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  state_name: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  county_name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  os_indicator: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  hole_direction: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  final_status: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  current_status: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  regulatory_status: string;

  @Column({ type: 'timestamptz' })
  regulatory_status_date: Date;

  @Column({ type: 'varchar', length: 80, nullable: true })
  basin: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  basin_code: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  sub_basin: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  sub_basin_code: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  play_name: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  play_type: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  permit_number: string;

  @Column({ type: 'timestamptz' })
  permit_date: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  permit_status: string;

  @Column({ type: 'timestamptz' })
  permit_reissue_date: Date;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  lease_acres: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  unit_of_measure: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  depth_total_driller: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  depth_total_logger: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  depth_true_vertical: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  depth_whipstock: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  class_initial_name: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  class_initial_code: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  class_final_name: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  class_final_code: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  status_final_code: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  formation_projected_name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  depth_total_projected: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  formation_at_td_name: number;

  @Column({ type: 'varchar', length: 80, nullable: true })
  prodfit_formation_at_td_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  formation_producing_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  prodfit_top_form_prod_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  prodfit_base_form_prod_name: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  prodfit_80_degree_heel_pt_form: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  elevation_reference_value: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  elevation_reference_datum: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  ground_elevation: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  elevation_df: number;

  @Column({ type: 'timestamptz' })
  date_first_spud: Date;

  @Column({ type: 'timestamptz' })
  date_spud: Date;

  @Column({ type: 'timestamptz' })
  date_completion: Date;

  @Column({ type: 'timestamptz' })
  date_rig_release: Date;

  @Column({ type: 'timestamptz' })
  date_abandonment: Date;

  @Column({ type: 'timestamptz' })
  date_first_report: Date;

  @Column({ type: 'timestamptz' })
  date_last_activity: Date;

  @Column({ type: 'timestamptz' })
  prodfit_update_date: Date;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true
  })
  depth_water_value: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  depth_water_datum: string;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 10,
    nullable: true
  })
  surface_latitude: number;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 10,
    nullable: true
  })
  surface_longitude: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  surface_ll_source: string;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 10,
    nullable: true
  })
  proposed_bh_latitude: number;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 10,
    nullable: true
  })
  proposed_bh_longitude: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  proposed_bh_ll_source: string;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 10,
    nullable: true
  })
  bh_latitude: number;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 10,
    nullable: true
  })
  bh_longitude: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  bh_ll_source: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  activity_code: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  permit_filer_long: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  permit_phone: string;

  @ManyToOne(() => UserEntity, (user) => user.createOneliners)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateOneliners)
  updated_by: UserEntity;

  @Column({ default: 'A' })
  rec_status: RecStatusEnum;
}
