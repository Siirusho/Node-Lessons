import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
  } from 'typeorm';
import { Order } from './order';

@Entity()
export class Customer extends BaseEntity{
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column({type: 'varchar', length:'50', nullable: false,})
    first_name:string;

    @Column({type: 'varchar', length:'50', nullable: false,})
    last_name:string;

    @Column({type: 'varchar', length:'150', nullable: false,})
    email:string;

}                           

