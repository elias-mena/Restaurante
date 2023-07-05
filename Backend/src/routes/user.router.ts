import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRouter {
    public router: Router;
    public userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    routes() {
        this.router.get('/', this.userController.getAll);
        this.router.get('/:id', this.userController.getOne);
        this.router.post('/', this.userController.create);
        this.router.put('/:id', this.userController.update);
        this.router.delete('/:id', this.userController.delete);
    }
}