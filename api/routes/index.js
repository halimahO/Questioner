import { Router } from 'express';
import meetup from './meetup';
import question from './question';
import rsvp from './rsvp';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send({
  message: 'Welcome, please use /api/v1',
}));


routes.use('/meetups', meetup);
routes.use('/questions', question);
routes.use('/meetups/:id/rsvps', rsvp);


export default routes;
