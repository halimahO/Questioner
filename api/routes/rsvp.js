import { Router } from 'express';
import rsvp from '../controllers/rsvp';

const routes = Router();

routes.post('/', rsvp.respondToRsvp);

export default routes;
