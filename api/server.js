import express from 'express';
import routes from './routes/index';

// Instantiate express
const app = express();

// Set the port
const port = process.env.PORT || 8080;

// Configure app to use json format
app.use(express.json());

// Register routes in app
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});

// Export app for testing purpose
export default app;
