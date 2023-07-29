import { Request, Response, NextFunction } from "express";
import { CashierModel } from "../models/cashier";
import { baseController } from "./base.controller";

export class CashierController {
  constructor() {}
    create(req: Request, res: Response, next: NextFunction) {
        baseController.create(req, res, next, CashierModel);
    }

    update(req: Request, res: Response, next: NextFunction) {
        baseController.update(req, res, next, CashierModel);
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        baseController.getAll(req, res, next, CashierModel);
    }

    getOne(req: Request, res: Response, next: NextFunction) {
        baseController.getOne(req, res, next, CashierModel);
    }

    delete(req: Request, res: Response, next: NextFunction) {
        baseController.delete(req, res, next, CashierModel);
    }
}
