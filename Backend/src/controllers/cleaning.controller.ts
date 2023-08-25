import {Request, Response, NextFunction} from 'express';
import { CleaningModel } from "../models/cleaning";
import { BrandModel } from '../models/brand';
import { MeasureUnitModel } from '../models/measure-unit';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';


export class CleaningController {

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, CleaningModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, CleaningModel);
    }

    async create(req: Request, res: Response, next: NextFunction){
        const brand = await BrandModel.findOne({code: req.body.brand_code})
        if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
        const mu = await MeasureUnitModel.findOne({code: req.body.measure_unit})
        if (!mu) return res.status(404).json({mensaje: 'No se encontró el código de la unidad de medida'});
        const consecutive = await consecutiveController.get_next_consecutive_code('Edibles')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, CleaningModel);
    }
    async update(req: Request, res: Response, next: NextFunction){
        try {
            const brand = await BrandModel.findOne({code: req.body.brand_code})
            if (!brand) return res.status(404).json({mensaje: 'No se encontró el código de la marca'});
            const mu = await MeasureUnitModel.findOne({code: req.body.measure_unit})
            if (!mu) return res.status(404).json({mensaje: 'No se encontró el código de la unidad de medida'});
            baseController.update(req, res, next, CleaningModel);
        } catch (error) {
            next()
        }

    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, CleaningModel);
    }
}

