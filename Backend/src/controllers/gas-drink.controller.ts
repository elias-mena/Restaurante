import {Request, Response, NextFunction} from 'express';
import { GasDrinkModel } from '../models/gas-drink';
import { BrandModel } from '../models/brand';
import { CountryModel } from '../models/country';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class GasDrinkController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.findOne({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const country = await CountryModel.findOne({name: req.body.nationality})
            if (!country) return res.status(404).json({mensaje: 'No se encontró el país'});
            const consecutive = await consecutiveController.get_next_consecutive_code('Gas beverages')
            if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            req.body.code = consecutive;
            baseController.create(req, res, next, GasDrinkModel);
        } catch (error) {
        next()
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.findOne({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const country = await CountryModel.findOne({name: req.body.nationality})
            if (!country) return res.status(404).json({mensaje: 'No se encontró el país'});
            baseController.update(req, res, next, GasDrinkModel);
        } catch (error) {
            next()
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, GasDrinkModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, GasDrinkModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, GasDrinkModel);
    }
}