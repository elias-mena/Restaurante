import { Router } from "express";
import { CountryController } from "../controllers/country.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class CountryRouter {
    public router: Router;
    public countryController: CountryController;

    constructor() {
        this.router = Router();
        this.countryController = new CountryController();
        this.routes();
    }

    routes() {
        // Create a new country
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.countryController.create
            );
        // Get a list of all countries
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.countryController.getAll
            );
        // Get one country by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.countryController.getOne
            );
        // Update a country
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.countryController.update
            );
        // Delete a country
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.countryController.delete
            );
    }
}

