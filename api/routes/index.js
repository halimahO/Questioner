import { Router } from 'express';
import meetup from '../controllers/meetup';

const routes = Router();

routes.post('/api/v1/meetups', meetup.createMeetup);
routes.get('/api/v1/meetups/:id', meetup.getOneMeetup);
routes.get('/api/v1/meetups', meetup.getAllMeetup);

export default routes;
