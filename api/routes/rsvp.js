import { Router } from 'express';
import rsvp from '../controllers/rsvp';

const routes = Router();

routes.post('/', rsvp.createRsvp);

export default routes;
