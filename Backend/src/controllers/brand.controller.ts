import {Request, Response, NextFunction} from 'express';
import { BrandModel } from '../models/brand';
import { baseController } from './base.controller';
import { consecutiveController } from './consecutive.controller';

export class BrandController{

    constructor(){
        this.create_default_brands();
    }

    async create(req: Request, res: Response, next: NextFunction){
        try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Brands')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, BrandModel);
        } catch (error) {
        next()
        }
    }

    update(req: Request, res: Response, next: NextFunction){
        baseController.update(req, res, next, BrandModel);
    }

    getAll(req: Request, res: Response, next: NextFunction){
        baseController.getAll(req, res, next, BrandModel);
    }

    getOne(req: Request, res: Response, next: NextFunction){
        baseController.getOne(req, res, next, BrandModel);
    }

    delete(req: Request, res: Response, next: NextFunction){
        baseController.delete(req, res, next, BrandModel);
    }

    async create_default_brands(){
        try{
            const brand = await BrandModel.find();
            if (brand.length > 0) return;
            const brands = [
                {
                    "code": await consecutiveController.get_next_consecutive_code('Brands'),
                    "name": "Coca Cola",
                    "description": "Empresa de bebidas",
                    "nationality": "Costa Rica",
                    "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    "company":{
                        "legal_id": "123456789",
                        "name": "Coca Cola",
                        "details": "Empresa de bebidas",
                        "address": "Calle 123",
                        "phone": "123456789",
                        "email": "cocacola@gmailcom",
                        "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    }
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Brands'),
                    "name": "Pepsi",
                    "description": "Empresa de bebidas",
                    "nationality": "Costa Rica",
                    "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    "company":{
                        "legal_id": "123456789",
                        "name": "Pepsi",
                        "details": "Empresa de bebidas",
                        "address": "Calle 123",
                        "phone": "123456789",
                        "email": "pepsi@gmailcom",
                        "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    }
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Brands'),
                    "name": "Jack Daniels",
                    "description": "Empresa de whisky",
                    "nationality": "Costa Rica",
                    "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    "company":{
                        "legal_id": "123456789",
                        "name": "Jack Daniels",
                        "details": "Empresa de whisky",
                        "address": "Calle 123",
                        "phone": "123456789",
                        "email": "jackdaniels@gmailcom",
                        "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    }
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Brands'),
                    "name": "Frontera",
                    "description": "Empresa de vinos",
                    "nationality": "Costa Rica",
                    "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    "company":{
                        "legal_id": "123456789",
                        "name": "Frontera",
                        "details": "Empresa de vinos",
                        "address": "Calle 123",
                        "phone": "123456789",
                        "email": "frontera@gmailcom",
                        "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    }
                },
                {
                    "code": await consecutiveController.get_next_consecutive_code('Brands'),
                    "name": "Dos Pinos",
                    "description": "Empresa de lacteos",
                    "nationality": "Costa Rica",
                    "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    "company":{
                        "legal_id": "123456789",
                        "name": "Dos Pinos",
                        "details": "Empresa de lacteos",
                        "address": "Calle 123",
                        "phone": "123456789",
                        "email": "dospinos@gmailcom",
                        "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
                    }
                }
            ]
            for (let i = 0; i < brands.length; i++) {
                const brand = brands[i];
                const new_brand = new BrandModel(brand);
                await new_brand.save();
            }
        }catch(error){
            console.log(error)
        }
    }
}