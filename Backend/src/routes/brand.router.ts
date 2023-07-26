import { Router } from "express";
import { BrandController } from "../controllers/brand.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class BrandRouter {
    public router: Router;
    public brandController: BrandController;

    constructor() {
        this.router = Router();
        this.brandController = new BrandController();
        this.routes();
    }

    routes() {
        // Create a new brand
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.brandController.create
            );
        // Get a list of all brands
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.brandController.getAll
            );
        // Get one brand by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.brandController.getOne
            );
        // Update a brand
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.brandController.update
            );
        // Delete a brand
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.brandController.delete
            );
    }
}

