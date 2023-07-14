import e, { Request, Response, NextFunction } from "express";
import {
  //generateToken,
  //generateRefreshToken,
  getPayload,
  checkToken,
  isTokenExpired
} from "../utils/jwt";

// Middleware to check if the api key is valid
export const checkApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["api-key"];
  if (apiKey === "123456") {
    next();
  } else {
    res.status(401).json({ message: "No autorizado" });
  }
};

// Middleware to check if the token is valid
export const checkApiToken = (req: Request,res: Response,next: NextFunction) => {
  const token = req.headers["api-token"];
  if(token){
    if (checkToken(token.toString())) {
      const payload = getPayload(token.toString());
      if (!isTokenExpired(payload)) {
        req.headers.user = payload;
        next();
      }
      else{
        res.status(401).json({ message: "No autorizado, token expirado" });
      }
    } else {
      res.status(401).json({ message: "No autorizado, token invalido" });
    }
  }
  else{
    res.status(401).json({ message: "No autorizado, falta el token" });
  }
}

// Function to check if the user is admin
export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = Object(req.headers.user);
  //console.log(user);
  if (user) {
    if (user.sis_admin) {
      next();
    } else {
      res.status(401).json({
        message: "No autorizado, se requieren permisos de administrador",
      });
    }
  }
};

/*
// Middleware to check if the token and the refresh token are valid, and if the token is expired

if the token is valid and not expired, the payload is added to the request headers
if the token is valid but expired, the refresh token is checked
if the refresh token is valid and not expired, a new token and a new refresh token are generated and added to the request headers
if the refresh token is valid but expired, the user is redirected to the login page

export const checkApiToken = (req: Request,res: Response,next: NextFunction) => {
  const token = req.headers["api-token"];
  const refreshToken = req.headers["refresh-token"];
  // Verify if the token and the refresh token exist
  if (token && refreshToken) {
    // Verify if the token is valid
    if (checkToken(token.toString())) {
      const payload = getPayload(token.toString());
      // Verify if the token is expired
      if (!isTokenExpired(payload)) {
        req.headers.user = payload;
        next();
      } else {
        // Verify if the refresh token is valid
        if (checkToken(refreshToken.toString())) {
          // Verify if the refresh token is expired
          const refreshPayload = getPayload(refreshToken.toString());
          if (!isTokenExpired(refreshPayload)) {
            const newToken = generateToken(payload);
            const newRefreshToken = generateRefreshToken(refreshPayload);
            req.headers["api-token"] = newToken;
            req.headers["refresh-token"] = newRefreshToken;
            req.headers.user = payload;
            next();
          } else {
            res.status(401).json({ message: "No autorizado, refresh token expirado" });
            res.redirect("/login");
          }
        }
      }
    } else {
      res.status(401).json({ message: "No autorizado, token invalido" });
    }
  } else {
    res.status(401).json({ message: "No autorizado, falta el token" });
  }
};
*/