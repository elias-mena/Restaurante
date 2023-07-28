import {Request, Response, NextFunction} from 'express';
import { CountryModel } from '../models/country';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class CountryController{

    constructor(){
        this.create_default_countries();
    }

    async create(req: Request, res: Response, next: NextFunction){
        try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Countries')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, CountryModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, CountryModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, CountryModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, CountryModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, CountryModel);
    }

    async create_default_countries(){
        try{
            const country = await CountryModel.find();
            if (country.length > 0) return;
            const countries = [
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Costa Rica",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1200px-Flag_of_Costa_Rica.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Argentina",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Panama",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1200px-Flag_of_Panama.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Chile",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Colombia",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Estado Unidos",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "España",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Francia",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Italia",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Countries'),
                    "name": "Mexico",
                    "flag_picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
                }
            ]
            for (let i = 0; i < countries.length; i++) {
                const country = new CountryModel(countries[i]);
                await country.save();
            }
        }catch(error){
            console.log(error)
        }
    }
}