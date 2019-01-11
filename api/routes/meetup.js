import { Router } from 'express';
import meetup from '../controllers/meetup';

const routes = Router();

routes.post('/api/v1/meetups', meetup.createMeetup);
routes.get('/upcoming', meetup.getUpcoming);
routes.get('/:id', meetup.getOneMeetup);
routes.get('/', meetup.getAllMeetup);

export default meetup;
