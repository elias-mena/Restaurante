import { Router } from "express";
import { MeasureUnitController } from "../controllers/measure_unit.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class MeasureUnitRouter {
    public router: Router;
    public measureUnitController: MeasureUnitController;

    constructor() {
        this.router = Router();
        this.measureUnitController = new MeasureUnitController();
        this.routes();
    }

    routes() {
        // Create a new role
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.create
            );
        // Get a list of all roles
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.getAll
            );
        // Get one role by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.getOne
            );
        // Update a role
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.update
            );
        // Delete a role
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.delete
            );
    }
}
