import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export class AuthRouter {
    public router: Router;
    private authController: AuthController;
    constructor() {
        this.router = Router();
        this.authController = new AuthController();
        this.routes();
    }
    public routes() {
        this.router.get('/login', this.authController.login);
        this.router.post('/recover-password/', this.authController.recoverPassword);
        this.router.post('/recover-password/:token', this.authController.changePassword);
    }
}