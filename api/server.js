import express from 'express';
import routes from './routes';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
});

export default app;
