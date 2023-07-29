import { Request, Response, NextFunction } from "express";
import { RestaurantModel } from "../models/restaurant";
import { TableModel } from "../models/table";
import { baseController } from "./base.controller";

export class RestaurantController {
  constructor() {
    this.default_restaurants();
    //this.get_default_tables();
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

    async get_default_tables() {
        try {
            const piccolo_stella = await RestaurantModel.findOne({name: 'Piccolo Stella'});
            const turin_anivo = await RestaurantModel.findOne({name: 'Turin Anivo'});
            const notte_fi_fuoco = await RestaurantModel.findOne({name: 'Notte Fi Fuoco'});
            const piccolo_stella_tables = await TableModel.find({restaurant: "Piccolo Stella"});
            const turin_anivo_tables = await TableModel.find({restaurant: "Turin Anivo"});
            const notte_fi_fuoco_tables = await TableModel.find({restaurant: "Notte Fi Fuoco"});

            // adding tables to restaurants
            if (piccolo_stella && piccolo_stella.tables.length<1) piccolo_stella.tables.push(...piccolo_stella_tables);
            if (turin_anivo && turin_anivo.tables.length<1) turin_anivo.tables.push(...turin_anivo_tables);
            if (notte_fi_fuoco && notte_fi_fuoco.tables.length<1) notte_fi_fuoco.tables.push(...notte_fi_fuoco_tables);
        } catch (error) {
        }
    }

    async default_restaurants(){
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
