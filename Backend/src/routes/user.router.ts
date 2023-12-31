import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkApiKey, checkApiToken, checkAdmin  } from "../middlewares/auth.middlewares";

export class UserRouter {
    public router: Router;
    public userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    routes() {
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.userController.create
            );
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.userController.getAll
            );
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.userController.getOne
            );
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.userController.update
        );
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.userController.delete
            );
    }
}