// Cors is a package that allows us to make requests to our server from a different domain name
import cors from 'cors';
import {App} from './app';
import './db'

export class Server {
    public app: App;
    public port: number;
    // Domains that are allowed to make requests to our server
    public whitelist: string[] = ['http://0.0.0.0:3000', 'http://localhost:4200'];

    constructor(port: number) {
        this.port = port;
        this.app = new App();
        this.app.instance.use(cors);//cors(this.corsOptions));
    }

    start() {
        this.app.instance.listen(this.port);
    }

}