import {Request, Response, NextFunction} from 'express';
import { baseController } from './base.controller';
import { RolModel } from "../models/role";
import { EmployeeModel } from "../models/employee";
import { consecutiveController } from './consecutive.controller';

export class EmployeeController{
    constructor() {}

    async create(req: Request, res: Response, next: NextFunction){

        try {
            if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
            //Create consecutive
            const consecutive =await consecutiveController.get_next_consecutive_code('Employees')
            if(!consecutive) res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            // Role unit exists?
            const role_code: string = req.body.role;
            const role = await RolModel.findOne({code: role_code});
            if (!role) return res.status(404).json({mensaje: 'No se encontro el rol'});
            const entity = new EmployeeModel(req.body);
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
            // Role code exists?
            const role_code: string = req.body.role;
            const role = await RolModel.findOne({code: role_code});
            if (!role) return res.status(404).json({mensaje: 'No se encontro el rol'});
            const entityUpdate = await EmployeeModel.findByIdAndUpdate(id, req.body, {new: true});
            if (!entityUpdate) return res.status(404).json({mensaje: 'No se encontro la entidad'});
            res.json(entityUpdate);
        } catch (error) {
            next(error);
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, EmployeeModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, EmployeeModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, EmployeeModel);
    }
}