import {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcrypt';
import {UserModel} from '../models/user';
import { consecutiveController } from './consecutive.controller';
export class UserController{
    constructor(){
        this
    }

    public async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const users = await UserModel.find().select('-password').select('-recovery_token');;
            res.json(users);

        } catch (error) {
            next(error);
        }
    }
    public async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const user = await UserModel.findById(req.params.id).select('-password').select('-recovery_token');
            //const username = req.params.username;
            //const user = await UserModel.find({"username": username}).select('-password');
            if (!user) return res.status(404).json({mensaje: 'No se encontro el usuario'});
            res.json(user);

        } catch (error) {
            next(error);
        }
    }

    public async create(req: Request, res: Response, next: NextFunction){
        try {
            //Create consecutive
            const consecutive = await consecutiveController.get_next_consecutive_code('Users');
            if (!consecutive) return res.status(404).json({mensaje: 'No se pudo crear el consecutivo'});
            req.body.code = consecutive;
            // Create user
            const user = new UserModel(req.body);
            const userCreated = await user.save();
            // Delete password from response
            const {password, ...userWithoutPassword} = userCreated.toObject();
            res.json(userWithoutPassword);
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction){
        const {id} = req.params;
        if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
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
        try {
            //if(!res.json(await UserModel.findByIdAndDelete(req.params.id))) return res.status(404).json({mensaje: 'No se encontro la persona'});
            const userDelete = await UserModel.findByIdAndDelete(req.params.id);
            if (!userDelete) return res.status(404).json({mensaje: 'No se encontro la persona'});
            res.json(userDelete);
        } catch (error) {
            next(error)
        }
    }
}