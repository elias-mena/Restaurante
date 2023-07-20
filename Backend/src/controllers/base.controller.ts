import { Request, Response, NextFunction } from "express";

class BaseController{
    async getAll(req: Request, res: Response, next: NextFunction, model: any){
        try {
            const entities = await model.find();
            res.json(entities);

        } catch (error) {
            next(error);
        }
    }

    async getOne(req: Request, res: Response, next: NextFunction, model: any){
        try {
            const entity = await model.findById(req.params.id);
            if (!entity) return res.status(404).json({mensaje: 'No se encontro la entidad'});
            res.json(entity);

        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction, model: any){
        try {
            if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
            const entity = new model(req.body);
            const rolCreated = await entity.save();
            res.json(rolCreated);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction, model: any){
        const {id} = req.params;
        if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
        if (id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
        try {
            const entityUpdate = await model.findByIdAndUpdate(id, req.body, {new: true});
            if (!entityUpdate) return res.status(404).json({mensaje: 'No se encontro la entidad'});
            res.json(entityUpdate);

        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction, model: any){
        const {id} = req.params;
        try {
            const entityUpdate = await model.findByIdAndDelete(id, req.body, {new: true});
            if (!entityUpdate) return res.status(404).json({mensaje: 'No se encontro la entidad'});
            res.json(entityUpdate);

        } catch (error) {
            next(error);
        }
    }
}

export const baseController = new BaseController();