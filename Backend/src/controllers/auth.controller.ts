import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user";
import { generateToken, generateRefreshToken } from "../utils/jwt";

export class AuthController {
  constructor() {}

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body)
        return res.status(404).json({ mensaje: "No se recibieron datos" });
      const { username, password } = req.body;
      const users = await UserModel.find();
      const user = users.find((user) => user.username === username);
      if (!user)
        return res.status(404).json({ mensaje: "No se encontro el usuario" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ mensaje: "Contraseña incorrecta" });
      // The payload is the data that we want to store in the token
      const payload = {
        id: user._id,
        username: user.username,
        sis_admin: user.sis_admin,
        rest_admin: user.rest_admin,
        accounts_admin: user.accounts_admin,
      };
      // Generate token
      const token = generateToken(payload);
      // Generate refresh token
      //const refreshToken = generateRefreshToken(payload);

      //Return user without password and token
      const userWithoutPassword = {
        id: user._id,
        username: user.username,
        name: user.name,
        last_name: user.last_name,
        phone_numbers: user.phone_numbers,
        sis_admin: user.sis_admin,
        rest_admin: user.rest_admin,
        accounts_admin: user.accounts_admin,
      }
      res.json({ user: userWithoutPassword, token,}); //refreshToken });
    } catch (error) {
      next(error);
    }
  }
}
