import { Request, Response, NextFunction } from "express";
import { MenuModel } from "../models/menu";
import { baseController } from "./base.controller";

export class MenuController {
    constructor() {}

    create(req: Request, res: Response, next: NextFunction) {
        baseController.create(req, res, next, MenuModel);
    }

    update(req: Request, res: Response, next: NextFunction) {
        baseController.update(req, res, next, MenuModel);
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        baseController.getAll(req, res, next, MenuModel);
    }

    getOne(req: Request, res: Response, next: NextFunction) {
        baseController.getOne(req, res, next, MenuModel);
    }

    delete(req: Request, res: Response, next: NextFunction) {
        baseController.delete(req, res, next, MenuModel);
    }
}
