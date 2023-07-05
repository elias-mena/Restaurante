import express, { Application } from 'express';

export class App {
    private readonly _instance: Application;

    get instance(): Application {
        return this._instance;
    }

    constructor() {
        this._instance = express();
        this._instance.use(express.json());
        this.registerRouters();
    }

    private registerRouters(): void {
        this._instance.get("/", (req, res) => {
            res.json("Hello World!");
        });
        // Aquí se registran las rutas
    }
}
