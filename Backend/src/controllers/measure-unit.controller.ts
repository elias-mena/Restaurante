import { Request, Response, NextFunction } from "express";
import { MeasureUnitModel } from "../models/measure-unit";
import { baseController } from "./base.controller";
import { consecutiveController } from "./consecutive.controller";
export class MeasureUnitController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    baseController.getAll(req, res, next, MeasureUnitModel);
  }

  getOne(req: Request, res: Response, next: NextFunction) {
    baseController.getOne(req, res, next, MeasureUnitModel);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const consecutive = await consecutiveController.get_next_consecutive_code('Measure Units')
      if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
      req.body.code = consecutive;
      baseController.create(req, res, next, MeasureUnitModel);
    } catch (error) {
      next()
    }
  }

  update(req: Request, res: Response, next: NextFunction) {
    baseController.update(req, res, next, MeasureUnitModel);
  }

  delete(req: Request, res: Response, next: NextFunction) {
    baseController.delete(req, res, next, MeasureUnitModel);
  }
}
