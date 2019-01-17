import { Router } from 'express';
import meetups from '../controllers/meetup';
import validate from '../middleware/validator';

const routes = Router();

routes.get('/', meetups.getAllMeetups);
routes.get('/upcoming', meetups.getUpcoming);
routes.get('/:id', meetups.getOneMeetup);
routes.post('/:id/rsvps', meetups.createRsvps);
routes.post('/', validate.validateMeetupInput, meetups.createMeetup);


export default routes;
