import { Router } from 'express';
import meetup from '../controllers/meetup';
import validator from '../validator/meetup';

const routes = Router();

routes.post('/', validator, meetup.createMeetup);
routes.get('/upcoming', meetup.getUpcoming);
routes.get('/:id', meetup.getOneMeetup);
routes.get('/', meetup.getAllMeetup);
routes.post('/:id/rsvps', meetup.createRsvp);

export default routes;
