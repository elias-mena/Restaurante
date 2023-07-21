import { Router } from "express";
import { BuffetController } from "../controllers/buffet.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class BuffetRouter {
    public router: Router;
    public buffetController: BuffetController;

    constructor() {
        this.router = Router();
        this.buffetController = new BuffetController();
        this.routes();
    }

    routes() {
        // Create a new role
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.buffetController.create
            );
        // Get a list of all roles
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.buffetController.getAll
            );
        // Get one role by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.buffetController.getOne
            );
        // Update a role
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.buffetController.update
            );
        // Delete a role
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.buffetController.delete
            );
    }
}

