import { Router } from "express";
import { LiquorController } from "../controllers/liquor.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class LiquorRouter {
    public router: Router;
    public liquorController: LiquorController;

    constructor() {
        this.router = Router();
        this.liquorController = new LiquorController();
        this.routes();
    }

    routes() {
        // Create a new liquor
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.liquorController.create
            );
        // Get a list of all liquors
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.liquorController.getAll
            );
        // Get one liquor by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.liquorController.getOne
            );
        // Update a liquor
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.liquorController.update
            );
        // Delete a liquor
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.liquorController.delete
            );
    }
}

