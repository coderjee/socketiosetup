'use strict';
const express = require('express');
const http = require('http');

/** Local modules */
const socketSetup = require('./socketsetup');
const app = express();

const port = 8000;

// Create a server with a host and port
const httpServer = http.createServer(app);

/* Import routes */
const routes = require('./app/route/routes');

/* Mounting Routes  */
routes.forEach(route => {
    app[route.method](route['path'], route['handler']);
});
/* Invoking socket setup. */
socketSetup(httpServer);

/* Run the server Intance */
httpServer.listen(port, ()=> {
    console.log('listening on *:' + port);
});