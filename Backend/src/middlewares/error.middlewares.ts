import { Request, Response, NextFunction } from 'express';

// This middleware is used to log errors (DON'T USE IN PRODUCTION)
export const logErrors = (err:any, req: Request, res:Response, next:NextFunction) => {
    console.error(err);
    next(err);
  }

// This middleware is used to handle server errors
export const errorHandler = (err:any, req: Request, res:Response, next:NextFunction) => {
    res.status(500).json({message: err.message || 'Hubo un error en el servidor'});
  }