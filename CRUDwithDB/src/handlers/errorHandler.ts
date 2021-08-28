import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next):void => {
    res.status(error.status || 500);
    res.send(`message: ${error.message}`);
};

export default errorHandler;
