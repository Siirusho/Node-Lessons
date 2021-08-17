import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next:NextFunction):void => {
    const error:any= new Error('Not found');
    error.status = 404;
    next(error);
   // res.status(404).end('Not found');
};
