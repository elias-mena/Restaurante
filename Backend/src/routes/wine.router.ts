import { Router } from "express";
import { WineController } from "../controllers/wine.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class WineRouter {
    public router: Router;
    public wineController: WineController;

    constructor() {
        this.router = Router();
        this.wineController = new WineController();
        this.routes();
    }

    routes() {
        // Create a new wine
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.wineController.create
            );
        // Get a list of all wines
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.wineController.getAll
            );
        // Get one wine by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.wineController.getOne
            );
        // Update a wine
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.wineController.update
            );
        // Delete a wine
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.wineController.delete
            );
    }
}

