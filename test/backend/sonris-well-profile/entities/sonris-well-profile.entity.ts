import { UserEntity } from 'src/auth/entity/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';

@Entity({ name: 'sonris_well_profile' })
export class SonrisWellProfileEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', length: 80 })
  operator_name: string;

  @Column({ type: 'varchar', length: 20 })
  operator_id: string;

  @Column({ type: 'varchar', length: 20 })
  field_id: string;

  @Column({ type: 'varchar', length: 40 })
  field_name: string;

  @Column({ type: 'varchar', length: 20 })
  well_serial_num: string;

  @Column({ type: 'varchar', length: 80 })
  well_name: string;

  @Column({ type: 'varchar', length: 10 })
  well_num: string;

  @Column({ type: 'varchar', length: 10 })
  lease_num: string;

  @Column({ type: 'varchar', length: 5 })
  well_status_code: string;

  @Column({ type: 'varchar', length: 30 })
  well_status_code_descr: string;

  @Column({ type: 'varchar', length: 40 })
  classification: string;

  @Column({ type: 'varchar', length: 5 })
  well_class_type_code: string;

  @Column({ type: 'varchar', length: 30 })
  well_class_type_code_descr: string;

  @Column({ type: 'varchar', length: 20 })
  api_num: string;

  @Column({ type: 'timestamptz' })
  effective_date: Date;

  @Column({ type: 'timestamptz' })
  permit_date: Date;

  @Column({ type: 'timestamptz' })
  spud_date: Date;

  @Column({ type: 'timestamptz' })
  well_status_date: Date;

  @Column({ type: 'varchar', length: 10 })
  section: string;

  @Column({ type: 'varchar', length: 10 })
  township: string;

  @Column({ type: 'varchar', length: 10 })
  range: string;

  @Column({ type: 'varchar', length: 10 })
  meridian: string;

  @Column({ type: 'int', width: 4 })
  parish_code: number;

  @Column({ type: 'varchar', length: 80 })
  parish_name: string;

  @Column({ type: 'int', width: 4 })
  district_code: number;

  @Column({ type: 'varchar', length: 80 })
  district_name: string;

  @Column({ type: 'varchar', length: 20 })
  ground_elevation: string;

  @Column({ type: 'decimal', precision: 12, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 12, scale: 8 })
  longitude: number;

  @Column({ type: 'int', width: 4 })
  product_type_code: number;

  @Column({ type: 'varchar', length: 80 })
  product_type_code_descr: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  usdw_value: number;

  @Column({ type: 'varchar', length: 20 })
  area_usdw_value: string;

  @Column({ type: 'varchar', length: 20 })
  source_area_usdw_value: string;

  @Column({ default: 'A' })
  rec_status: RecStatusEnum;

  @ManyToOne(() => UserEntity, (user) => user.createSonris)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateSonris)
  updated_by: UserEntity;
}
