import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/user";
import bcrypt from "bcrypt";

export class AuthController {
    constructor() {}

    public async login(req: Request, res: Response, next: NextFunction){
        try {
            if(!req.body) return res.status(404).json({mensaje: 'No se recibieron datos'});
            const {username, password} = req.body;
            const users = await UserModel.find();
            const user = users.find(user => user.username === username);
            if (!user) return res.status(404).json({mensaje: 'No se encontro el usuario'});
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({mensaje: 'Contraseña incorrecta'});
            //Return user without password
            res.json({password, ...user.toObject()});
        } catch (error) {
            next(error);
        }
    }
}