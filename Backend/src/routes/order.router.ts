import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class OrderRouter {
    public router: Router;
    public orderController: OrderController;

    constructor() {
        this.router = Router();
        this.orderController = new OrderController();
        this.routes();
    }

    routes() {
        // Create a new order
        this.router.post(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.orderController.create
            );
        // Get a list of all order
        this.router.get(
            '/',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.orderController.getAll
            );
        // Get one order by id
        this.router.get(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.orderController.getOne
            );
        // Update a order
        this.router.put(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.orderController.update
            );
        // Delete a order
        this.router.delete(
            '/:id',
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.orderController.delete
            );
    }
}
