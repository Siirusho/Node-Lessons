import express, {Router} from 'express';

import UserController from '../controllers/users';

const userRouter:Router = express.Router();

userRouter.get('/', UserController.getUsers);

userRouter.post('/', UserController.createUser);

userRouter.get('/:id', UserController.getUser);

userRouter.delete('/:id', UserController.deleteUser);

userRouter.put('/:id', UserController.updateUser);

export default userRouter;