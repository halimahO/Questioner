import { Router } from 'express';
import meetup from './meetup';
import question from './question';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send({
  message: 'WELCOME',
}));

routes.use('/meetups', meetup);
routes.use('/questions', question);

export default routes;
