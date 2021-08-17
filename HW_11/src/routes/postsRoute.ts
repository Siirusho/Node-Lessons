import express, {Router} from 'express';

import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/posts';

const postRouter:Router = express.Router();

postRouter.get('/', getPosts);

postRouter.post('/', createPost);

postRouter.get('/:id', getPost);

postRouter.delete('/:id', deletePost);

postRouter.patch('/:id', updatePost);

export default postRouter;