import {Request, Response, NextFunction} from 'express';
import { BinnacleModel } from '../models/binnacle';
import { UserModel } from '../models/user';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class BinnacleController{

    constructor(){}

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const user = await UserModel.findOne({code: req.body.user});
            if (!user) return res.status(404).json({mensaje: 'No se encontro el usuario'});
            const consecutive = await consecutiveController.get_next_consecutive_code('Binnacle')
            if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            req.body.code = consecutive;
            baseController.create(req, res, next, BinnacleModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, BinnacleModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, BinnacleModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, BinnacleModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, BinnacleModel);
    }
}