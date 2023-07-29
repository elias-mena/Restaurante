import { Router } from "express";
import { CashierController } from "../controllers/cashier.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class CashierRouter {
    public router: Router;
    public cashierController: CashierController;

    constructor() {
        this.router = Router();
        this.cashierController = new CashierController();
        this.routes();
    }

    routes() {
        // Create a new cashier
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cashierController.create
            );
        // Get a list of all cashiers
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cashierController.getAll
            );
        // Get one cashier by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cashierController.getOne
            );
        // Update a cashier
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cashierController.update
            );
        // Delete a cashier
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.cashierController.delete
            );
    }
}