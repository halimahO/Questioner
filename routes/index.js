import { Router } from 'express';
import meetup from '../controllers/meetup';
import question from '../controllers/question';
import rsvp from '../controllers/rsvp';

const routes = Router();

routes.post('/api/v1/meetups', meetup.createMeetup);
routes.get('/api/v1/meetups/upcoming', meetup.getUpcoming);
routes.get('/api/v1/meetups/:id', meetup.getOneMeetup);
routes.get('/api/v1/meetups', meetup.getAllMeetup);
routes.post('/api/v1/questions', question.createQuestion);
routes.patch('/api/v1/questions/:id/upvote', question.upvote);
routes.patch('/api/v1/questions/:id/downvote', question.downvote);
routes.post('/api/v1/meetups/:id/rsvps', rsvp.respondToRsvp);

export default routes;
