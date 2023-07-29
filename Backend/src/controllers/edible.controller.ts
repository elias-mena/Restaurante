import {Request, Response, NextFunction} from 'express';
import { EdibleModel } from "../models/edible";
import { BrandModel } from '../models/brand';
import { MeasureUnitModel } from '../models/measure_unit';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';


export class EdibleController {

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, EdibleModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, EdibleModel);
    }

    async create(req: Request, res: Response, next: NextFunction){
        const brand = await BrandModel.findOne({code: req.body.brand_code})
        if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
        const mu = await MeasureUnitModel.findOne({code: req.body.measure_unit})
        if (!mu) return res.status(404).json({mensaje: 'No se encontró el código de la unidad de medida'});
        const consecutive = await consecutiveController.get_next_consecutive_code('Edibles')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, EdibleModel);
    }
    async update(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.findOne({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const mu = await MeasureUnitModel.findOne({code: req.body.measure_unit})
            if (!mu) return res.status(404).json({mensaje: 'No se encontró el código de la unidad de medida'});
            baseController.update(req, res, next, EdibleModel);
        } catch (error) {
            next()
        }

    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, EdibleModel);
    }
}

