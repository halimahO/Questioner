import { Router } from 'express';
import question from '../controllers/question';

const routes = Router();

routes.post('/api/v1/questions', question.createQuestion);
routes.patch('/api/v1/questions/:id/upvote', question.upvote);
routes.patch('/api/v1/questions/:id/downvote', question.downvote);
