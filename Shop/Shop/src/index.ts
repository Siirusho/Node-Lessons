import "reflect-metadata";
import {createConnection} from "typeorm";
import { Customer } from './entity/customer';
import { Product } from './entity/product';
import { Order } from './entity/order';

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new Customer();
    user.first_name = "Timber";
    user.last_name = "Saw";
    user.email = 'TS@gmail.com';
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.customer_id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Customer);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
