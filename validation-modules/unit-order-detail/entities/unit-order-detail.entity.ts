import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { UnitOrderEntity } from 'src/unit-order/entities/unit-order.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'unit_order_detail' })
export class UnitOrderDetailEntity extends CustomBaseEntity {
  @ManyToOne(() => UnitOrderEntity, (uo) => uo.unitOrderDetails, {
    onDelete: 'CASCADE'
  })
  Unit_order_id: UnitOrderEntity;

  @Column({ type: 'varchar', length: 10, nullable: true })
  tract_no: string;

  @Column({ type: 'numeric', precision: 10, scale: 4, default: 0.0 })
  gross_area_in_acres: number;

  @Column({ type: 'numeric', precision: 10, scale: 4, default: 0.0 })
  net_area_in_acres: number;

  @Column({ type: 'numeric', precision: 12, scale: 8, default: 0.0 })
  pct_of_unit: number;

  @Column({ type: 'int', nullable: true })
  interest_type: number;

  @Column({ type: 'varchar', length: 80, nullable: true })
  ownership_display_name: string;

  @Column({ type: 'text', nullable: true })
  cur_notes: string;

  @ManyToOne(() => UserEntity, (user) => user.createOrderDetails)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateOrderDetails)
  updated_by: UserEntity;

  @Column({ default: 'A' })
  rec_status: RecStatusEnum;
}
