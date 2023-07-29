import {Request, Response, NextFunction} from 'express';
import { SupplierModel } from '../models/supplier';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class SupplierController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Suppliers')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, SupplierModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, SupplierModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, SupplierModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, SupplierModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, SupplierModel);
    }
}