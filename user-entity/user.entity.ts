import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

import { UserStatusEnum } from 'src/auth/user-status.enum';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { RoleEntity } from 'src/role/entities/role.entity';

import { IHSLeaseVolEntity } from 'src/ihslease-vol/entities/ihslease-vol.entity';
import { IHSMonthProdEntity } from 'src/ihs-month-prod/entities/ihs-month-prod.entity';
import { IHSProdByFieldOprEntity } from 'src/ihs-prod-by-field-opr/entities/ihs-prod-by-field-opr.entity';
import { IHSProdHeaderEntity } from 'src/ihsprod-header/entities/ihsprod-header.entity';
import { UnitOrderEntity } from 'src/unit-order/entities/unit-order.entity';

/**
 * User Entity
 */
@Entity({
  name: 'user'
})
export class UserEntity extends CustomBaseEntity {
  @Index({
    unique: true
  })
  @Column()
  username: string;

  @Index({
    unique: true
  })
  @Column()
  email: string;

  @Column({ nullable: true })
  @Exclude({
    toPlainOnly: true
  })
  password: string;

  @Index()
  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  contact: string;

  @Column({ nullable: true })
  avatar: string;

  @Column() //{ default:UserStatusEnum.INACTIVE }
  status: UserStatusEnum;

  @Column({ nullable: true })
  @Exclude({
    toPlainOnly: true
  })
  token: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  tokenValidityDate: Date;

  @Column()
  @Exclude({
    toPlainOnly: true
  })
  salt: string;

  @Column({
    nullable: true
  })
  @Exclude({
    toPlainOnly: true
  })
  twoFASecret?: string;

  @Exclude({
    toPlainOnly: true
  })
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  twoFAThrottleTime?: Date;

  @Column({
    default: false
  })
  isTwoFAEnabled: boolean;

  @Exclude({
    toPlainOnly: true
  })
  skipHashPassword = false;

  @ManyToOne(() => RoleEntity, (role) => role.users)
  // @JoinColumn({name: 'roleId',referencedColumnName:"id"})
  role: RoleEntity;

  @Column({ default: 2 })
  roleId: number;

  @OneToMany(() => IHSLeaseVolEntity, (vol) => vol.created_by)
  createVols: IHSLeaseVolEntity[];

  @OneToMany(() => IHSLeaseVolEntity, (vol) => vol.updated_by)
  updateVols: IHSLeaseVolEntity[];

  @OneToMany(() => IHSMonthProdEntity, (prod) => prod.created_by)
  createProds: IHSMonthProdEntity[];

  @OneToMany(() => IHSMonthProdEntity, (prod) => prod.updated_by)
  updateProds: IHSMonthProdEntity[];

  @OneToMany(() => IHSProdByFieldOprEntity, (fieldOpr) => fieldOpr.created_by)
  createFieldOprs: IHSProdByFieldOprEntity[];

  @OneToMany(() => IHSProdByFieldOprEntity, (fieldOpr) => fieldOpr.updated_by)
  updateFieldOprs: IHSProdByFieldOprEntity[];

  @OneToMany(() => IHSProdHeaderEntity, (prodHeader) => prodHeader.created_by)
  createHeaders: IHSProdHeaderEntity[];

  @OneToMany(() => IHSProdHeaderEntity, (prodHeader) => prodHeader.updated_by)
  updateHeaders: IHSProdHeaderEntity[];

  @OneToMany(() => UnitOrderEntity, (unitOrder) => unitOrder.created_by)
  crearteOrders: IHSProdHeaderEntity[];

  @OneToMany(() => UnitOrderEntity, (unitOrder) => unitOrder.updated_by)
  updateOrders: IHSProdHeaderEntity[];

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    if (this.password && !this.skipHashPassword) {
      await this.hashPassword();
    }
  }

  @BeforeUpdate()
  async hashPasswordBeforeUpdate() {
    if (this.password && !this.skipHashPassword) {
      await this.hashPassword();
    }
  }

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, this.salt);
  }
}
