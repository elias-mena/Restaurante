import express, { Application } from 'express';
import {errorHandler, logErrors} from '../middlewares/error.handler';
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
        this._instance.get("/", (req, res) => {
            res.json("Hello World!");
        });
        // Aquí se registran las rutas
    }
}
