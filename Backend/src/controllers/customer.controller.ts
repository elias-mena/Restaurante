import { Request, Response, NextFunction } from "express";
import { CustomerModel } from "../models/customer";
import { baseController } from "./base.controller";
import { consecutiveController } from "./consecutive.controller";

export class CustomerController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    baseController.getAll(req, res, next, CustomerModel);
  }

  getOne(req: Request, res: Response, next: NextFunction) {
    baseController.getOne(req, res, next, CustomerModel);
  }

  async create(req: Request, res: Response, next: NextFunction){
    try {
        const consecutive = await consecutiveController.get_next_consecutive_code('Clients')
        if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
        req.body.code = consecutive;
        baseController.create(req, res, next, CustomerModel);
    } catch (error) {
    next()
    }
}

  update(req: Request, res: Response, next: NextFunction) {
    baseController.update(req, res, next, CustomerModel);
  }

  delete(req: Request, res: Response, next: NextFunction) {
    baseController.delete(req, res, next, CustomerModel);
  }
}
