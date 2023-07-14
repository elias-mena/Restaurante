import { Request, Response, NextFunction } from 'express';

// Middleware to check if the user is authenticated
export const checkApiKey = (req: Request, res:Response, next:NextFunction) => {
    const apiKey = req.headers['api-key'];
    if (apiKey === '123456') {
        next();
    } 
    else {
        res.status(401).json({message: 'No autorizado'});
    }
  }
