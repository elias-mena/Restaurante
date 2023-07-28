import { Router } from "express";
import { GasDrinkController } from "../controllers/gas_drink.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class GasDrinkRouter {
    public router: Router;
    public gdController: GasDrinkController;

    constructor() {
        this.router = Router();
        this.gdController = new GasDrinkController();
        this.routes();
    }

    routes() {
        // Create a new gas drink
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.gdController.create
            );
        // Get a list of all gas drinks
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.gdController.getAll
            );
        // Get one gas drink by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.gdController.getOne
            );
        // Update a gas drink
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.gdController.update
            );
        // Delete a gas drink
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.gdController.delete
            );
    }
}

