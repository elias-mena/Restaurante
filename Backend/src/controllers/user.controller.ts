import {UserModel} from '../models/user';
import {Request, Response, NextFunction} from 'express';

export class UserController{
    constructor(){}

    public async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const users = await UserModel.find();
            res.json(users);
        } catch (error) {

            next(error);
        }
    }
    public async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) return res.status(404).json({mensaje: 'No se encontro el usuario'});
            res.json(user);

        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction){
        try {
            const user = new UserModel(req.body);
            const userCreated = await user.save();
            res.json(userCreated);

        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        if (id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
        try {
            const userUpdate = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
            if (!userUpdate) return res.status(404).json({mensaje: 'No se encontro la persona'});
            res.json(userUpdate);

        } catch (error) {
            next(error);
        }

    }

    public async delete(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        if (id!==req.body._id) return res.status(404).json({mensaje: 'El id no coincide'});
        try {
            const userDelete = await UserModel.findByIdAndDelete(id);
            if (!userDelete) return res.status(404).json({mensaje: 'No se encontro la persona'});
            res.json(userDelete);
        } catch (error) {
            next(error);
        }
    }
}