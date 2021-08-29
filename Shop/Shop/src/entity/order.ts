import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Customer } from "./customer";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'numeric' })
    amount: number;

    @OneToOne(type => Customer) @JoinColumn() 
    Customer: Customer;
  }
         
  