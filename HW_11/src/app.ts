import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/route';
import errorHandler from './handlers/errorHandler';
import error404Handler from './handlers/error404Handler';

dotenv.config();

export const PORT = process.env.PORT || 3500;

export const getApp = ():Express => {
    const app = express();
    app.disable('x-powered-by');
    app.use(express.json());

    app.use(cors());
    app.use("/posts", router);

    app.use(error404Handler);
    app.use(errorHandler);
   
    return app;
};

