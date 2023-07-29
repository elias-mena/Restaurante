import { Router} from "express";
import { CustomerController } from "../controllers/customer.controller";
import { checkApiKey } from "../middlewares/auth.middlewares";

export class CustomerRouter {
    public router: Router;
    public customerController: CustomerController;

    constructor() {
        this.router = Router();
        this.customerController = new CustomerController();
        this.routes();
    }

    routes() {
        // Create a new customer
        this.router.post(
            '/',
            checkApiKey,
            this.customerController.create
            );
        // Get a list of all customers
        this.router.get(
            '/',
            checkApiKey,
            this.customerController.getAll
            );
        // Get one customer by id
        this.router.get(
            '/:id',
            checkApiKey,
            this.customerController.getOne
            );
        // Update a customer
        this.router.put(
            '/:id',
            checkApiKey,
            this.customerController.update
            );
        // Delete a customer
        this.router.delete(
            '/:id',
            checkApiKey,
            this.customerController.delete
            );
    }
}