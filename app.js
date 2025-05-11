/**
 * Main application file
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const { logger } = require('./middleware');
const routes = require('./routes');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

// Routes
routes(app);

module.exports = app;
