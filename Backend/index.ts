import {Server} from './src/config/server';

const server = new Server(3000);
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
}
);