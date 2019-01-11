import { Router } from 'express';
import meetup from '../controllers/meetup';

const routes = Router();
const {
  createMeetup, getAllMeetup, getOneMeetup, getUpcoming,
} = meetup;

routes.post('/', createMeetup);
routes.get('/upcoming', getUpcoming);
routes.get('/:id', getOneMeetup);
routes.get('/', getAllMeetup);

export default routes;
