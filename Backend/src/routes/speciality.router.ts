import { Router } from "express";
import { SpecialityController } from "../controllers/speciality.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class SpecialityRouter {
    public router: Router;
    public specialitController: SpecialityController;

    constructor() {
        this.router = Router();
        this.specialitController = new SpecialityController();
        this.routes();
    }

    routes() {
        // Create a new speciality
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.specialitController.create
            );
        // Get a list of all specialities
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.specialitController.getAll
            );
        // Get one speciality by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.specialitController.getOne
            );
        // Update a speciality
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.specialitController.update
            );
        // Delete a speciality
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.specialitController.delete
            );
    }
}

