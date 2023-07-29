import {Request, Response, NextFunction} from 'express';
import { TableModel, ITable } from '../models/table';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';
import { RestaurantModel } from '../models/restaurant';

export class TableController{

    constructor(){
        this.create_default_tables();
    }

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const restaurant = await RestaurantModel.findOne({name: req.body.restaurant});
            if (!restaurant) return res.status(404).json({mensaje: 'No se pudo encontrar el restaurante'});
            const consecutive = await consecutiveController.get_next_consecutive_code('Tables')
            if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            req.body.code = consecutive;
            baseController.create(req, res, next, TableModel);
        } catch (error) {
        next()
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const restaurant = await RestaurantModel.findOne({name: req.body.restaurant});
            if (!restaurant) return res.status(404).json({mensaje: 'No se pudo encontrar el restaurante'});
            baseController.update(req, res, next, TableModel);
        } catch (error) {
            next()
        }
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, TableModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, TableModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, TableModel);
    }

    async create_default_tables(){
        try {
            const tables = await TableModel.find({});
            if (tables.length > 0) return;
            // Picoolo Stella has 23 tables
            for(let i = 0; i < 23; i++){
                const consecutive = await consecutiveController.get_next_consecutive_code('Tables');
                const table = {
                    code: consecutive,
                    number: i + 1,
                    name: `Piccolo Stella ${i + 1}`,
                    capacity: 2,
                    restaurant: "Piccolo Stella",
                }
                await TableModel.create(table);
            }

            // Turin Anivo has 23 tables
            for(let i = 0; i < 23; i++){
                const consecutive = await consecutiveController.get_next_consecutive_code('Tables');
                const table = {
                    code: consecutive,
                    number: i + 1,
                    name: `Turin Anivo ${i + 1}`,
                    capacity: 2,
                    restaurant: 'Turin Anivo',
                }
                await TableModel.create(table);
            }

            // Notte di Fuoco has 28 tables
            for(let i = 0; i < 28; i++){
                const consecutive = await consecutiveController.get_next_consecutive_code('Tables');
                const table = {
                    code: consecutive,
                    number: i + 1,
                    name: `Notte di Fuoco ${i + 1}`,
                    capacity: 2,
                    restaurant: "Notte di Fuoco",
                }
                await TableModel.create(table);
            }
        } catch (error) {
            console.log(error);
        }
    }
}