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
        // Create a new meausure unit
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.create
            );
        // Get a list of all meausure units
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.getAll
            );
        // Get one meausure unit by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.getOne
            );
        // Update a meausure unit
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.update
            );
        // Delete a meausure unit
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.measureUnitController.delete
            );
    }
}
