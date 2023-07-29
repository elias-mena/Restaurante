import { Router } from "express";
import { RestaurantController } from "../controllers/restaurant.controller";

export class RestaurantRouter {
    public router: Router;
    public restaurantController: RestaurantController;

    constructor() {
        this.router = Router();
        this.restaurantController = new RestaurantController();
        this.routes();
    }

    routes() {
        // Create a new restaurant
        this.router.post(
            '/',
            this.restaurantController.create
            );
        // Get a list of all restaurants
        this.router.get(
            '/',
            this.restaurantController.getAll
            );
        // Get one restaurant by id
        this.router.get(
            '/:id',
            this.restaurantController.getOne
            );
        // Update a restaurant
        this.router.put(
            '/:id',
            this.restaurantController.update
            );
        // Delete a restaurant
        this.router.delete(
            '/:id',
            this.restaurantController.delete
            );
    }
}