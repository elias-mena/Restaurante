import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user";
import { sendEmail } from "../utils/mail";
import {
  generateToken,
  generateRecoveryToken,
  getPayload, checkToken,
  isTokenExpired,
  expireToken,
} from "../utils/jwt";


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
      const isMatch = password == user.password;
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

  public async recoverPassword(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body)
        return res.status(404).json({ mensaje: "No se recibieron datos" });
      const { email } = req.body;
      //const users = await UserModel.find();
      //const user = users.find((user) => user.email === email);
      const user = await UserModel.findOne({email: email});
      if (!user)
        return res.status(404).json({ mensaje: "No se encontro el usuario" });
      const token = generateRecoveryToken({id: user._id});
      const link = `http://frontend/recover-password/${token}`;
      const mailOptions = {
        from: "Restaurante",
        to: email,
        subject: "Recuperar contraseña",
        html: `<p>Para recuperar su contraseña haga click en el siguiente link: <a href="${link}">${link}</a></p>`
      };
      const info = await sendEmail(mailOptions);
      if(!info) return res.status(500).json({mensaje: "Error al enviar el email"});
      user.recovery_token = token;
      await user.save();
      res.json({message: "Email enviado"});
    } catch (error) {
      next(error);
    }
  }

  public async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(404).json({ mensaje: "No se recibio el token" });
      // Expire token
      expireToken(token);
      res.json({message: "Sesion cerrada"});
    } catch (error) {
      next(error);
    }
  }

  public async changePassword(req: Request, res: Response, next: NextFunction) {
    try {

      if (!req.body)
        return res.status(404).json({ mensaje: "No se recibieron datos" });
      const { password } = req.body;
      const token = req.params.token;

      if(!token) return res.status(404).json({mensaje: "No se recibio el token"});
      if(!checkToken(token)) return res.status(401).json({mensaje: "Token invalido"});
      if(isTokenExpired(token)) return res.status(401).json({mensaje: "Token expirado"});

      const payload = getPayload(token);
      const user = await UserModel.findById(payload.id);

      if (!user) return res.status(404).json({ mensaje: "No se encontro el usuario" });
      if(user.recovery_token !== token) return res.status(401).json({mensaje: "Token invalido"});

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
      user.recovery_token = "";
      await user.save();
      res.json({message: "Contraseña actualizada"});
    } catch (error) {
      next(error);
    }
  }
}
