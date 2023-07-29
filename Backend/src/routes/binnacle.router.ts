import { Router } from "express";
import { BinnacleController } from "../controllers/binnacle.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class BinnacleRouter {
    public router: Router;
    public binnacleController: BinnacleController;

    constructor() {
        this.router = Router();
        this.binnacleController = new BinnacleController();
        this.routes();
    }

    routes() {
        // Create a new binnacle
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.binnacleController.create
            );
        // Get a list of all binnacles
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.binnacleController.getAll
            );
        // Get one binnacle by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.binnacleController.getOne
            );
        // Update a binnacle
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.binnacleController.update
            );
        // Delete a binnacle
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.binnacleController.delete
            );
    }
}

