import {Request, Response, NextFunction} from 'express';
import { LiquorModel } from '../models/liquor';
import { BrandModel } from '../models/brand';
import { CountryModel } from '../models/country';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class LiquorController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.findOne({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const country = await CountryModel.findOne({name: req.body.nationality})
            if (!country) return res.status(404).json({mensaje: 'No se encontró el país'});
            const consecutive = await consecutiveController.get_next_consecutive_code('Liquors')
            if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            req.body.code = consecutive;
            baseController.create(req, res, next, LiquorModel);
        } catch (error) {
        next()
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.findOne({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const country = await CountryModel.find({name: req.body.nationality})
            if (!country) return res.status(404).json({mensaje: 'No se encontró el país'});
            baseController.update(req, res, next, LiquorModel);
        } catch (error) {
            next()
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, LiquorModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, LiquorModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, LiquorModel);
    }
}