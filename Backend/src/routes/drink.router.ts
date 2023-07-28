import { Router } from "express";
import { DrinkController } from "../controllers/drink.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class DrinkRouter {
    public router: Router;
    public drinkController: DrinkController;

    constructor() {
        this.router = Router();
        this.drinkController = new DrinkController();
        this.routes();
    }

    routes() {
        // Create a new Drink
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.drinkController.create
            );
        // Get a list of all drinks
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.drinkController.getAll
            );
        // Get one drink by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.drinkController.getOne
            );
        // Update a drink
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.drinkController.update
            );
        // Delete a drink
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.drinkController.delete
            );
    }
}

