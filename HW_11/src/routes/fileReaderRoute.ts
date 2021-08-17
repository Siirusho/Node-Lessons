import express, {Router} from 'express';

import {fileReader} from '../controllers/fileReader'

const fileRouter:Router = express.Router();

fileRouter.get('/', fileReader);

export default fileRouter;