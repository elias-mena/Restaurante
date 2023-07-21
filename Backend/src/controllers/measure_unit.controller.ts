import {Request, Response, NextFunction} from 'express';
import {MeasureUnitModel} from '../models/measure_unit';
import { baseController } from './base.controller';

export class MeasureUnitController{
    constructor(){
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, MeasureUnitModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, MeasureUnitModel);
    }

    create(req: Request, res: Response, next: NextFunction){
        baseController.create(req, res, next, MeasureUnitModel);
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, MeasureUnitModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, MeasureUnitModel);
    }

}