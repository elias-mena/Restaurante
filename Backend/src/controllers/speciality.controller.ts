import {Request, Response, NextFunction} from 'express';
import { SpecialityModel } from '../models/speciality';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';
export class SpecialityController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Specialties')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, SpecialityModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, SpecialityModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, SpecialityModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, SpecialityModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, SpecialityModel);
    }
}