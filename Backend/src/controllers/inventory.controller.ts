import {Request, Response, NextFunction} from 'express';
import {InventoryModel} from '../models/inventory';
import { BrandModel } from '../models/brand';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class InventoryController{
    constructor(){
    }

    async create(req: Request, res: Response, next: NextFunction){
        const brand = await BrandModel.findOne({code: req.body.brand_code})
        if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
        const consecutive = await consecutiveController.get_next_consecutive_code('Inventory')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, InventoryModel);
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, InventoryModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, InventoryModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, InventoryModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, InventoryModel);
    }
}