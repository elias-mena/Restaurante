import { Router } from "express";
import { RoleController } from "../controllers/role.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class RoleRouter {
    public router: Router;
    public rolController: RoleController;

    constructor() {
        this.router = Router();
        this.rolController = new RoleController();
        this.routes();
    }

    routes() {
        // Create a new role
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.create
            );
        // Get a list of all roles
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.getAll
            );
        // Get one role by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.getOne
            );
        // Update a role
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.update
            );
        // Delete a role
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.rolController.delete
            );
    }
}

