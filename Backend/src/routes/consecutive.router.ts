import { Router } from "express";
import { ConsecutiveController } from "../controllers/consecutive.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class ConsecutiveRouter {
    public router: Router;
    public rolController: ConsecutiveController;

    constructor() {
        this.router = Router();
        this.rolController = new ConsecutiveController();
        this.routes();
    }

    routes() {
        // Create a new consecutive
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.create
            );
        // Get a list of all consecutives
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.getAll
            );
        // Get one consecutive by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.getOne
            );
        // Update a consecutive
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.update
            );
        // Delete a consecutive
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.delete
            );
    }
}

