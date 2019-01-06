import express from 'express';
import routes from './routes/index';

// Instantiate express
const app = express();

// Set the port
const port = process.env.PORT || 8080;
const host = '0.0.0.0';

// Configure app to use json format
app.use(express.json());

// Register routes in app
app.use('/', routes);

// Start the server
app.listen(port, host);

// Export app for testing purpose
export default app;
