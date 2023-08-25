import {Server} from './src/config/server';

const server = new Server(3000);
server.start();
console.log('Server listening on http://localhost:3000');