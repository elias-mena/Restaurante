import { Router } from "express";
import { BarController } from "../controllers/bar.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class BarRouter {
    public router: Router;
    public barController: BarController;

    constructor() {
        this.router = Router();
        this.barController = new BarController();
        this.routes();
    }

    routes() {
        // Create a new bar
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.barController.create
            );
        // Get a list of all bars
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.barController.getAll
            );
        // Get one bar by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.barController.getOne
            );
        // Update a bar
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.barController.update
            );
        // Delete a bar
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.barController.delete
            );
    }
}