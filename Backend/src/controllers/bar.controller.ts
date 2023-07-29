import { Request, Response, NextFunction } from "express";
import { BarModel } from "../models/bar";
import { baseController } from "./base.controller";

export class BarController {
    constructor() {}

    create(req: Request, res: Response, next: NextFunction) {
    baseController.create(req, res, next, BarModel);
    }

    update(req: Request, res: Response, next: NextFunction) {
    baseController.update(req, res, next, BarModel);
    }

    getAll(req: Request, res: Response, next: NextFunction) {
    baseController.getAll(req, res, next, BarModel);
    }

    getOne(req: Request, res: Response, next: NextFunction) {
    baseController.getOne(req, res, next, BarModel);
    }

    delete(req: Request, res: Response, next: NextFunction) {
    baseController.delete(req, res, next, BarModel);
    }
}
