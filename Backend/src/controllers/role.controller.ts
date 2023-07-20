import {Request, Response, NextFunction} from 'express';
import {RolModel} from '../models/role';
import { baseController } from './base.controller';

export class RoleController{
    constructor(){
        this.charge_default_roles();
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, RolModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, RolModel);
    }

    create(req: Request, res: Response, next: NextFunction){
        baseController.create(req, res, next, RolModel);
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, RolModel);
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
                        code: '1',
                        name: 'Usuario',
                        description: 'Usuario normal'
                    },
                    {
                        code: '2',
                        name: 'Administrador',
                        description: 'Administrador'},
                    {
                        code: '3',
                        name: 'Recepcionista',
                        description: 'Recepcionista'
                    },
                    {
                        code: '4',
                        name: 'Mesero',
                        description: 'Mesero'
                    },
                    {
                        code: '5',
                        name: 'Bartender',
                        description: 'Bartender'
                    },
                    {
                        code: '6',
                        name: 'Chef',
                        description: 'Chef'
                    },
                    {
                        code: '7',
                        name: 'Cocinero',
                        description: 'Cocinero'
                    },
                    {
                        code: '8',
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

