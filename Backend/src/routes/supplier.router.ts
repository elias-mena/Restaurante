import { Router } from "express";
import { SupplierController } from "../controllers/supplier.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class SupplierRouter {
    public router: Router;
    public supplierController: SupplierController;

    constructor() {
        this.router = Router();
        this.supplierController = new SupplierController();
        this.routes();
    }

    routes() {
        // Create a new speciality
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.supplierController.create
            );
        // Get a list of all specialities
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.supplierController.getAll
            );
        // Get one speciality by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.supplierController.getOne
            );
        // Update a speciality
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.supplierController.update
            );
        // Delete a speciality
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.supplierController.delete
            );
    }
}

