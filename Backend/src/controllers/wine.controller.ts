import {Request, Response, NextFunction} from 'express';
import { WineModel } from '../models/wine';
import { BrandModel } from '../models/brand';
import { CountryModel } from '../models/country';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class WineController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.find({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const country = await CountryModel.find({code: req.body.nationality})
            if (!country) return res.status(404).json({mensaje: 'No se encontró el código del país'});
            const consecutive = await consecutiveController.get_next_consecutive_code('Wines')
            if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            req.body.code = consecutive;
            baseController.create(req, res, next, WineModel);
        } catch (error) {
        next()
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.find({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const country = await CountryModel.find({code: req.body.nationality})
            if (!country) return res.status(404).json({mensaje: 'No se encontró el código del país'});
            baseController.update(req, res, next, WineModel);
        } catch (error) {
            next()
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, WineModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, WineModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, WineModel);
    }
}