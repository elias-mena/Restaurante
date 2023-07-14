import {Request, Response, NextFunction} from 'express';

/*
These functions are used to avoid repeating code in the controllers
*/

export const  baseGetAll = async (req: Request, res: Response, next: NextFunction, model:any) => {
    try {
        const entities = await model.find();
        res.json(entities);

    } catch (error) {
        next(error);
    }
}

export const baseGetOne = async (req: Request, res: Response, next: NextFunction, model:any) => {
    try {
        const entity = await model.findById(req.params.id);
        if (!entity) return res.status(404).json({mensaje: 'No se encontro el cliente'});
        res.json(entity);

    } catch (error) {
        next(error);
    }
}

export const baseCreate = async (req: Request, res: Response, next: NextFunction, model:any) => {
    try {
        const entity = new model(req.body);
        const rolCreated = await entity.save();
        res.json(rolCreated);
    } catch (error) {
        next(error);
    }
}

export const baseUpdate = async (req: Request, res: Response, next: NextFunction, model:any) => {
    const {id} = req.params;
    if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
    if (id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
    try {
        const entityUpdate = await model.findByIdAndUpdate(id, req.body, {new: true});
        if (!entityUpdate) return res.status(404).json({mensaje: 'No se encontro el cliente'});
        res.json(entityUpdate);

    } catch (error) {
        next(error);
    }
}

export const baseDelete = async (req: Request, res: Response, next: NextFunction, model:any) => {
    try {
        const rolDeleted = await model.findByIdAndDelete(req.params.id);
        if (!rolDeleted) return res.status(404).json({mensaje: 'No se encontro el cliente'});
        res.json(rolDeleted);

    } catch (error) {
        next(error);
    }
}