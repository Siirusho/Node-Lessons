import express, {Router} from 'express';

import { getPosts, createPost, getPost, deletePost, updatePost } from '../controllers/posts';

const router:Router = express.Router();

router.get('/', getPosts);

router.post('/', createPost);

router.get('/:id', getPost);

router.delete('/:id', deletePost);

router.patch('/:id', updatePost);

export default router;