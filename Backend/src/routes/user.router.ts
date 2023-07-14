import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkApiKey } from "../middlewares/auth.handler";

export class UserRouter {
    public router: Router;
    public userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    routes() {
        this.router.post('/', checkApiKey, this.userController.create);
        this.router.get('/', checkApiKey, this.userController.getAll);
        this.router.get('/:id', this.userController.getOne);
        this.router.put('/:id', checkApiKey, this.userController.update);
        this.router.delete('/:id', checkApiKey, this.userController.delete);
    }
}