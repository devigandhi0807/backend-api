import { UserEntity } from 'src/auth/entity/user.entity';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { RecStatusEnum } from 'src/common/enum/rec_status.enum';
import { UnitOrderDetailEntity } from 'src/unit-order-detail/entities/unit-order-detail.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'unit_order' })
export class UnitOrderEntity extends CustomBaseEntity {
  @OneToMany(
    () => UnitOrderDetailEntity,
    (unitDetail) => unitDetail.Unit_order_id,
    {
      cascade: true
    }
  )
  unitOrderDetails: UnitOrderDetailEntity[];
  unitOrderDetailsCount: number;

  @Column({ type: 'varchar', length: 80, nullable: true })
  operator_name: string;

  @Column({ type: 'varchar', length: 80, array: true, default: [] })
  county_name: string[];

  @Column({ type: 'varchar', length: 10, nullable: true })
  section: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  township: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  range: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  unit_order_link: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  State: string;

  @ManyToOne(() => UserEntity, (user) => user.createOrders)
  created_by: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.updateOrders)
  updated_by: UserEntity;

  @Column({ default: 'A' })
  rec_status: RecStatusEnum;
}
