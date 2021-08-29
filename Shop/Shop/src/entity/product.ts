import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Order } from './order';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    prod_id: number;

    @Column({type: 'varchar', length:'50'})
    prod_name:string;

    @Column({type: 'numeric'})
    price:number;

    @OneToOne(type => Order) @JoinColumn() 
    order: Order;
}                           

