const app = require('./app');
const express = require('@feathersjs/express');
const proxyApp = express();
const http = require('http');

proxyApp.use('/api/v1', app);

const server = http.createServer(proxyApp);

app.setup(server);

module.exports = server;
