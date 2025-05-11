/**
 * Server entry point
 */
const app = require('./app');
const config = require('./config');

// Start server
app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`);
});
