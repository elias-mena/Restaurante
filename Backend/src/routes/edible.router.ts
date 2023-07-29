import { Router } from "express";
import { EdibleController } from "../controllers/edible.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class EdibleRouter {
    public router: Router;
    public edibleController: EdibleController;

    constructor() {
        this.router = Router();
        this.edibleController = new EdibleController();
        this.routes();
    }

    routes() {
        // Create a new edible
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.edibleController.create
            );
        // Get a list of all edibles
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.edibleController.getAll
            );
        // Get one edible by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.edibleController.getOne
            );
        // Update a speciality
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.edibleController.update
            );
        // Delete a edible
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.edibleController.delete
            );
    }
}

