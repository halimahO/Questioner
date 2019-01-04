import { Router } from 'express';
import meetup from '../controllers/meetup';
import question from '../controllers/question';

const routes = Router();

routes.post('/api/v1/meetups', meetup.createMeetup);
routes.get('/api/v1/meetups/upcoming', meetup.getUpcoming);
routes.get('/api/v1/meetups/:id', meetup.getOneMeetup);
routes.get('/api/v1/meetups', meetup.getAllMeetup);
routes.post('/api/v1/questions', question.createQuestion);

export default routes;
