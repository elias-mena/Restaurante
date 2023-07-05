import express, { Application } from 'express';
import {errorHandler, logErrors} from '../middlewares/error.handler';
import { UserRouter } from '../routes/user.router';
export class App {
    private readonly _instance: Application;

    get instance(): Application {
        return this._instance;
    }

    constructor() {
        this._instance = express();
        this._instance.use(express.json());
        this.registerRouters();
        // The middlewares is registered always after the routes
        this._instance.use(logErrors);
        this._instance.use(errorHandler);

    }

    private registerRouters(): void {
        // Here we register the routes
        this._instance.use('/users', new UserRouter().router);
    }
}
