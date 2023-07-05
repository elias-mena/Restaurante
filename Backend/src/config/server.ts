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
        this.app.instance.use(cors(this.corsOptions));
    }

    start(callback: () => void) {
        this.app.instance.listen(this.port, callback);
    }
    private corsOptions(){
        origin: (origin: any, callback: any) => {
            if (this.whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('No permitido por CORS'));
            }
        }
    }
}