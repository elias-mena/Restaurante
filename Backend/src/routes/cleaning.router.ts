import { Router } from "express";
import { CleaningController } from "../controllers/cleaning.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class CleaningRouter {
    public router: Router;
    public cleaningController: CleaningController;

    constructor() {
        this.router = Router();
        this.cleaningController = new CleaningController();
        this.routes();
    }

    routes() {
        // Create a new cleaning item
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cleaningController.create
            );
        // Get a list of all cleaning items
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cleaningController.getAll
            );
        // Get one cleaning item by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cleaningController.getOne
            );
        // Update a cleaning item
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cleaningController.update
            );
        // Delete a cleaning item
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cleaningController.delete
            );
    }
}

