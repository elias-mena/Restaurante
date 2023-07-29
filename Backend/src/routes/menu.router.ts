import { Router } from "express";
import { MenuController } from "../controllers/menu.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class MenuRouter {
    public router: Router;
    public menuController: MenuController;

    constructor() {
        this.router = Router();
        this.menuController = new MenuController();
        this.routes();
    }

    routes() {
        // Create a new menu
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.menuController.create
            );
        // Get a list of all menus
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.menuController.getAll
            );
        // Get one menu by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.menuController.getOne
            );
        // Update a menu
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.menuController.update
            );
        // Delete a menu
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.menuController.delete
            );
    }
}