const http = require('node:http');
const app = require('./src/app');


require('dotenv').config();

require('./src/config/db');

const server = http.createServer(app);

PORT = process.env.PORT || 3000;

server.listen(PORT);

server.on('listening', () =>{
    console.log(`Escuchando el puerto ${PORT}`)
})

server.on('error', (error) =>{
    console.log(`Ha ocurrido un error: ${error}`)
})