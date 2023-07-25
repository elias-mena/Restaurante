import {Request, Response, NextFunction} from 'express';
import {RolModel} from '../models/role';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class RoleController{
    constructor(){
        this.charge_default_roles();
    }

    async create(req: Request, res: Response, next: NextFunction){
        const consecutive = await consecutiveController.get_next_consecutive_code('Roles')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, RolModel);
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, RolModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, RolModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, RolModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, RolModel);
    }

    private async charge_default_roles(){
        try {
            const roles_db = await RolModel.find();
            if (roles_db.length===0) {
                const roles = [
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Usuario',
                        description: 'Usuario normal'
                    },
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Administrador',
                        description: 'Administrador'},
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Recepcionista',
                        description: 'Recepcionista'
                    },
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Mesero',
                        description: 'Mesero'
                    },
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Bartender',
                        description: 'Bartender'
                    },
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Chef',
                        description: 'Chef'
                    },
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Cocinero',
                        description: 'Cocinero'
                    },
                    {
                        code: await consecutiveController.get_next_consecutive_code('Roles'),
                        name: 'Lava platos',
                        description: 'Lava platos'
                    }
                ];
                await RolModel.insertMany(roles);
                console.log('Roles creados');
                return true;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

