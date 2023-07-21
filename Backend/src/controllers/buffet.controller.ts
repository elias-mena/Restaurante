import {Request, Response, NextFunction} from 'express';
import { MeasureUnitModel } from '../models/measure_unit';
import { BuffetModel } from "../models/buffet";
import { baseController } from './base.controller';


export class BuffetController {

    async create(req: Request, res: Response, next: NextFunction){
        try {
            if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
            // Measure unit exists?
            const measure_unit_code: string = req.body.measure_unit_code;
            const measure_unit = await MeasureUnitModel.findOne({code: measure_unit_code});
            if (!measure_unit) return res.status(404).json({mensaje: 'No se encontro la unidad de medida'});
            const entity = new BuffetModel(req.body);
            const rolCreated = await entity.save();
            res.json(rolCreated);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
        if(id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
        try {
            // Measure unit exists?
            const measure_unit_code: string = req.body.measure_unit_code;
            const measure_unit = await MeasureUnitModel.findOne({code: measure_unit_code});
            if (!measure_unit) return res.status(404).json({mensaje: 'No se encontro la unidad de medida'});
            const entityUpdate = await BuffetModel.findByIdAndUpdate(id, req.body, {new: true});
            if (!entityUpdate) return res.status(404).json({mensaje: 'No se encontro la entidad'});
            res.json(entityUpdate);
        } catch (error) {
            next(error);
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, BuffetModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, BuffetModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, BuffetModel);
    }
}