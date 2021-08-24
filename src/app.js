const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const configuration = require('@feathersjs/configuration');

const authentication = require('./authentication');
const services = require('./services');

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// Load app configuration
app.configure(configuration());

// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(__dirname));
// Add REST API support
app.configure(express.rest());

app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);

// Register a nicer error handler than the default Express one
app.use(express.errorHandler());

module.exports = app;
