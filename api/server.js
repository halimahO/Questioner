// server.js
import express from 'express';


const app = express();

app.use(express.json());

app.listen(3000);

export default app;
