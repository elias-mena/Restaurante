import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";
import { checkApiKey,checkApiToken,checkAdmin } from "../middlewares/auth.middlewares";

export class EmployeeRouter {
    public router: Router;
    private employeeController: EmployeeController;
    constructor() {
        this.router = Router();
        this.employeeController = new EmployeeController();
        this.routes();
    }
    public routes() {

        // Create a new employee
        this.router.post(
            "/",
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
        this.employeeController.create
        );

        // Get a list of all employees
        this.router.get(
            "/",
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
        this.employeeController.getAll
        );

        // Get one employee
        this.router.get(
            "/:id",
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.employeeController.getOne
            );

        // Update a employee
        this.router.put(
            "/:id",
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.employeeController.update
            );

        // Delete a employee
        this.router.delete(
            "/:id",
            checkApiKey,
            //checkApiToken,
            //checkAdmin,
            this.employeeController.delete
            );
    }

}