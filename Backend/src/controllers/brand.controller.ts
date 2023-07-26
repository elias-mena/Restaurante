import {Request, Response, NextFunction} from 'express';
import { BrandModel } from '../models/brand';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class BrandController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Brands')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, BrandModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, BrandModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, BrandModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, BrandModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, BrandModel);
    }
}