import { Request, Response, NextFunction } from "express";
import { RestaurantModel } from "../models/restaurant";
import { baseController } from "./base.controller";

export class RestaurantController {
  constructor() {
    this.default_restauranta();
  }
    create(req: Request, res: Response, next: NextFunction) {
        baseController.create(req, res, next, RestaurantModel);
    }

    update(req: Request, res: Response, next: NextFunction) {
        baseController.update(req, res, next, RestaurantModel);
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        baseController.getAll(req, res, next, RestaurantModel);
    }

    getOne(req: Request, res: Response, next: NextFunction) {
        baseController.getOne(req, res, next, RestaurantModel);
    }

    delete(req: Request, res: Response, next: NextFunction) {
        baseController.delete(req, res, next, RestaurantModel);
    }

    async default_restauranta(){
        try {
            const restaurants = await RestaurantModel.find();
            if (restaurants.length > 0) return;
            const piccolo_stella = {
                name: 'Piccolo Stella',
                address: 'Calle 1 # 1 - 1',
                phone_numbers: [],
                active: true,
                admins: [],
                cashiers: [],
                tables: [],
                bars: [],
                employees: [],
                customers: [],
                menu: [],
                inventory: [],
                cleaning: [],
                edibles: []
            }
            const turin_anivo = {
                name: 'Turin Anivo',
                address: 'Calle 2 # 2 - 2',
                phone_numbers: [],
                active: true,
                admins: [],
                cashiers: [],
                tables: [],
                bars: [],
                employees: [],
                customers: [],
                menu: [],
                inventory: [],
                cleaning: [],
                edibles: []
            }
            const notte_fi_fuoco = {
                name: 'Notte Fi Fuoco',
                address: 'Calle 3 # 3 - 3',
                phone_numbers: [],
                active: true,
                admins: [],
                cashiers: [],
                tables: [],
                bars: [],
                employees: [],
                customers: [],
                menu: [],
                inventory: [],
                cleaning: [],
                edibles: []
            }
            // Inserting default restaurants
            const piccolo_stella_restaurant = new RestaurantModel(piccolo_stella);
            await piccolo_stella_restaurant.save();
            const turin_anivo_restaurant = new RestaurantModel(turin_anivo);
            await turin_anivo_restaurant.save();
            const notte_fi_fuoco_restaurant = new RestaurantModel(notte_fi_fuoco);
            await notte_fi_fuoco_restaurant.save();
            console.log('Default restaurants inserted');
        } catch (error) {
            console.log(error);
        }
    }
}
