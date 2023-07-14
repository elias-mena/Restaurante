import { Router } from "express";
import { RolController } from "../controllers/rol.controller";
import { checkApiKey } from "../middlewares/auth.handler";

export class RolRouter {
    public router: Router;
    public rolController: RolController;

    constructor() {
        this.router = Router();
        this.rolController = new RolController();
        this.routes();
    }

    routes() {
        this.router.post('/', checkApiKey, this.rolController.create);
        this.router.get('/', checkApiKey, this.rolController.getAll);
        this.router.get('/:id', checkApiKey, this.rolController.getOne);
        this.router.put('/:id', checkApiKey, this.rolController.update);
        this.router.delete('/:id', checkApiKey, this.rolController.delete);
    }
}

