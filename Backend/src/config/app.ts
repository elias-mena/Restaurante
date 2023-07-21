import express, { Application } from 'express';
import {errorHandler, logErrors} from '../middlewares/error.middlewares';
import { AuthRouter } from '../routes/auth.router';
import { UserRouter } from '../routes/user.router';
import { RoleRouter } from '../routes/role.router';
import { EmployeeRouter } from '../routes/employee.router';
import { MeasureUnitRouter } from '../routes/measure_unit.router';
import { BuffetRouter } from '../routes/buffet.router';

/*
import {CustomerRouter} from '../routes/customer.router';
import { EdibleRouter } from '../routes/edible.router';
*/

export class App {
    private readonly _instance: Application;

    get instance(): Application {
        return this._instance;
    }

    constructor() {
        this._instance = express();
        this._instance.use(express.json());
        this.registerRouters();
        // The middlewares are registered always after the routes
        this._instance.use(logErrors);
        this._instance.use(errorHandler);

    }

    private registerRouters(): void {
        // Here we register the routes
        this._instance.use('/users', new UserRouter().router);
        this._instance.use('/auth', new AuthRouter().router);
        this._instance.use('/roles', new RoleRouter().router);
        this._instance.use('/employees', new EmployeeRouter().router);
        this._instance.use('/measure_units', new MeasureUnitRouter().router);
        //this._instance.use('/buffet', new BuffetRouter().router);
        //this._instance.use('/customers',CustomerRouter);
        //this._instance.use('/edibles', new EdibleRouter().router);
        
    }
}

