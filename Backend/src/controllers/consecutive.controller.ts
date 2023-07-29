import {Request, Response, NextFunction} from 'express';
import { baseController } from './base.controller';
import {ConsecutiveModel} from '../models/consecutive';

export class ConsecutiveController{
    constructor(){
        this.charge_default_consecutive();
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, ConsecutiveModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, ConsecutiveModel);
    }

    create(req: Request, res: Response, next: NextFunction){
        baseController.create(req, res, next, ConsecutiveModel);
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, ConsecutiveModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, ConsecutiveModel);
    }

    public async get_next_consecutive_code(type:string){
        const consecutive_db = await ConsecutiveModel.findOne({type: type});
        if (consecutive_db) {
            const next_consecutive = consecutive_db.value + 1;
            await ConsecutiveModel.findByIdAndUpdate(consecutive_db._id, {value: next_consecutive});
            const consecutive: string = consecutive_db.code + next_consecutive;
            return consecutive;
        }
    }

    private async charge_default_consecutive(){
        try {
            const consecutive_db = await ConsecutiveModel.find();
            if (consecutive_db.length===0) {
                const consecutives = [
                    {
                        code: 'CLI-',
                        type: 'Clients',
                        description: 'Consecutivo de clientes',
                        value: 0,
                        has_prefix: true,
                        prefix: 'CLI',

                    },
                    {
                        code: 'PE-',
                        type: 'Personal',
                        description: 'Consecutivo de personal',
                        value: 0,
                        has_prefix: true,
                        prefix: 'PE',
                    },
                    {
                        code: 'PRO-',
                        type: 'Suppliers',
                        description: 'Consecutivo de proveedores',
                        value: 0,
                        has_prefix: true,
                        prefix: 'PRO',
                    },
                    {
                        code: 'PU-',
                        type: 'Roles',
                        description: 'Consecutivo de puestos',
                        value: 0,
                        has_prefix: true,
                        prefix: 'PU',
                    },
                    {
                        code: 'EVE-',
                        type: 'Events',
                        description: 'Consecutivo de eventos',
                        value: 0,
                        has_prefix: true,
                        prefix: 'EVE',
                    },
                    {
                        code: 'USU-',
                        type: 'Users',
                        description: 'Consecutivo de usuarios',
                        value: 0,
                        has_prefix: true,
                        prefix: 'USU',
                    },
                    {
                        code: 'UM-',
                        type: 'Measure Units',
                        description: 'Consecutivo de unidades de medida',
                        value: 0,
                        has_prefix: true,
                        prefix: 'UM',
                    },
                    {
                        code: 'P-',
                        type: 'Countries',
                        description: 'Consecutivo de paises',
                        value: 0,
                        has_prefix: true,
                        prefix: 'P',
                    },
                    {
                        code: 'M-',
                        type: 'Brands',
                        description: 'Consecutivo de marcas',
                        value: 0,
                        has_prefix: true,
                        prefix: 'M',
                    },
                    {
                        code: 'COM-',
                        type: 'Edibles',
                        description: 'Consecutivo de comestibles',
                        value: 0,
                        has_prefix: true,
                        prefix: 'COM',
                    },
                    {
                        code: 'DE-',
                        type: 'Dipsosables and Packagings',
                        description: 'Consecutivo de desechables y empaques',
                        value: 0,
                        has_prefix: true,
                        prefix: 'DE',
                    },
                    {
                        code: 'IN-',
                        type: 'Inventory',
                        description: 'Consecutivo de productos de tecnologia, desechables y utencilios',
                        value: 0,
                        has_prefix: true,
                        prefix: 'IN',
                    },
                    {
                        code: 'RES-',
                        type: 'Restaurants',
                        description: 'Consecutivo de restaurantes',
                        value: 0,
                        has_prefix: true,
                        prefix: 'RES',
                    },
                    {
                        code: 'BUF-',
                        type: 'Buffets',
                        description: 'Consecutivo de buffets',
                        value: 0,
                        has_prefix: true,
                        prefix: 'BUF',
                    },
                    {
                        code: 'ESP-',
                        type: 'Specialties',
                        description: 'Consecutivo de especialidades',
                        value: 0,
                        has_prefix: true,
                        prefix: 'ESP',
                    },
                    {
                        code: 'B-',
                        type: 'Hot everages',
                        description: 'Consecutivo de bebidas (frias y calientes)',
                        value: 0,
                        has_prefix: true,
                        prefix: 'BC',
                    },
                    {
                        code: 'L-',
                        type: 'Liquors',
                        description: 'Consecutivo de licores',
                        value: 0,
                        has_prefix: true,
                        prefix: 'L',
                    },
                    {
                        code: 'V-',
                        type: 'Wines',
                        description: 'Consecutivo de vinos',
                        value: 0,
                        has_prefix: true,
                        prefix: 'V',
                    },
                    {
                        code: 'EMP-',
                        type: 'Employees',
                        description: 'Consecutivo de empleados',
                        value: 0,
                        has_prefix: true,
                        prefix: 'EMP',
                    },
                    {
                        code: 'ME-',
                        type: 'Tables',
                        description: 'Consecutivo de mesas',
                        value: 0,
                        has_prefix: true,
                        prefix: 'ME',
                    },
                    {
                        code: 'BIT-',
                        type: 'Binnacle',
                        description: 'Consecutivo de bitacora',
                        value: 0,
                        has_prefix: true,
                        prefix: 'BIT',
                    },
                    {
                        code: 'FAC-',
                        type: 'Invoices',
                        description: 'Consecutivo de facturas',
                        value: 0,
                        has_prefix: true,
                        prefix: 'FAC',
                    },
                    {
                        code: 'COM-',
                        type: 'Complaints',
                        description: 'Consecutivo de quejas',
                        value: 0,
                        has_prefix: true,
                        prefix: 'COM',
                    },
                    {
                        code: 'LH-',
                        type: 'Cleaning and Hygiene',
                        description: 'Consecutivo de limpieza e higiene',
                        value: 0,
                        has_prefix: true,
                        prefix: 'LH',
                    }
                ];
                await ConsecutiveModel.insertMany(consecutives);
                return true;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const consecutiveController = new ConsecutiveController();

/*
list of consecutives
CLI- Clients
PE- Personal
PRO- Suppliers
PU- Positions
EVE- Events
USU- Users
UM- Measure Units
P- Countries
M- Brands
COM- Edibles
DE- Dipsosables and Packagings
EU- Equipment
LH- Cleaning and Hygiene
TEC- Technologies
RES- Restaurants
BUF- Buffets
ESP- Specialties
BC- Hot everages
BH- Cold beverages
BG- Gas beverages
L- Liquors
V- Wines
EMP- Employees
ME- Tables
BIT- Binnacle
FAC- Invoices
COM- Complaints
*/