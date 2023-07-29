import { Router } from "express";
import { TableController } from "../controllers/table.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class TableRouter {
    public router: Router;
    public tableController: TableController;

    constructor() {
        this.router = Router();
        this.tableController = new TableController();
        this.routes();
    }

    routes() {
        // Create a new table
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.tableController.create
            );
        // Get a list of all tables
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.tableController.getAll
            );
        // Get one table by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.tableController.getOne
            );
        // Update a table
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.tableController.update
            );
        // Delete a table
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.tableController.delete
            );
    }
}

