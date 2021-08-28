import { v4 as uuid } from 'uuid';
import {Request, Response} from 'express';
const db = require('../db/db');

class UserController {
    async createUser (req:Request, res:Response) {   
        const {firstName,lastName, email} = req.body;
        const newUser = await db.query(`INSERT INTO users(firstName,lastName, email) values ($1, $2, $3) RETURNING *`, [firstName, lastName, email]);
        res.send(newUser.rows[0]);
    };
    async getUsers (req:Request, res:Response) {
        const users = await db.query(`SELECT * FROM users`);
        res.send(users.rows);
    }
    async getUser (req:Request, res:Response){
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM users WHERE userID = $1`, [id]);
        res.send(user.rows[0]);
    };
    async deleteUser (req:Request, res:Response){    
        const id = req.params.id;
        const user = await db.query(`DELETE FROM users WHERE userID = $1`, [id]);
        res.send('Deleted'); 
    };
    
    async updateUser (req:Request, res:Response) {
        const id = req.params.id;
        const {firstName, lastName, email} = req.body;
        const user = await db.query(`UPDATE users set firstName = $1, lastName =$2, email= $3 where userID = $4 RETURNING *`, [firstName, lastName, email, id]);
        res.send(user.rows[0]);
    };
}
export default new UserController();
 


