import {Request, Response, NextFunction} from 'express';
import { DrinkModel } from '../models/drink';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';
export class DrinkController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Beverages')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, DrinkModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, DrinkModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, DrinkModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, DrinkModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, DrinkModel);
    }
}