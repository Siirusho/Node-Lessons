import { v4 as uuid } from 'uuid';
import {Request, Response} from 'express'
let posts: Array<any> = [
    {
        name:"img",
        creationDate: Date(),
        comments: true, 
        id:"7ad2a1d8-b02f-4c76-8c03-6cbe90e5d93f"
    }
];

export const getPosts = (req:Request, res:Response):void => {
    res.send(posts);
}

export const createPost = (req:Request, res:Response):void => {   
    const post = req.body;
    posts.push({...post, id: uuid()});
    res.send(`Post with name <${post.name}> added to the database.`);
};

export const getPost = (req:Request, res:Response):void => {
    res.send(posts.filter((post) => post.id == req.params.id))
};

export const deletePost = (req:Request, res:Response):void => {     
    posts = posts.filter((post) => post.id !== req.params.id);
    res.send(`Post with id ${req.params.id} has been deleted`);
};

export const updatePost =  (req:Request, res:Response):void => {
    const post = posts.find((post) => post.id == req.params.id)
    if(typeof req.body.name !== 'undefined' ) post.name = req.body.name;
    if(typeof req.body.creationDate !== 'undefined' )  post.creationDate = req.body.creationDate;
    if(typeof req.body.comments !== 'undefined' ) post.comments = req.body.comments;
    
    res.send(`Post with name <${post.name}> has been updated`)
};