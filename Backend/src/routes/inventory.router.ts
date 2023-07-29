import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class InventoryRouter {
    public router: Router;
    public inventoryController: InventoryController;

    constructor() {
        this.router = Router();
        this.inventoryController = new InventoryController();
        this.routes();
    }

    routes() {
        // Create a new inventory item
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.inventoryController.create
            );
        // Get a list of all inventory items
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.inventoryController.getAll
            );
        // Get one inventory item by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.inventoryController.getOne
            );
        // Update a inventory item
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.inventoryController.update
            );
        // Delete a inventory item
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.inventoryController.delete
            );
    }
}

