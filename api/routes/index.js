import { Router } from 'express';
import meetup from '../controllers/meetup';

const routes = Router();

routes.post('/api/v1/meetups', meetup.createMeetup);

export default routes;
