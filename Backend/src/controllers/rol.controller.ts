import {Request, Response, NextFunction} from 'express';
import {RolModel} from '../models/rol';

export class RolController{
    constructor(){
        this
    }

    public async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const roles = await RolModel.find();
            res.json(roles);

        } catch (error) {
            next(error);
        }
    }
    public async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const rol = await RolModel.findById(req.params.id);
            if (!rol) return res.status(404).json({mensaje: 'No se encontro el rol'});
            res.json(rol);

        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction){
        try {
            const rol = new RolModel(req.body);
            const rolCreated = await rol.save();
            res.json(rolCreated);
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
        if (id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
        try {
            const rolUpdate = await RolModel.findByIdAndUpdate(id, req.body, {new: true});
            if (!rolUpdate) return res.status(404).json({mensaje: 'No se encontro el rol'});
            res.json(rolUpdate);

        } catch (error) {
            next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction){
        try {
            const rolDeleted = await RolModel.findByIdAndDelete(req.params.id);
            if (!rolDeleted) return res.status(404).json({mensaje: 'No se encontro el rol'});
            res.json(rolDeleted);

        } catch (error) {
            next(error);
        }
    }
}

