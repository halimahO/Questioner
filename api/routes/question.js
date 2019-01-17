import { Router } from 'express';
import questions from '../controllers/question';
import validate from '../middleware/validator';

const routes = Router();

//routes.post('/', validate.params, questions.postQuestion);
routes.patch('/:id/upvote', questions.upvote);
routes.patch('/:id/downvote', questions.downvote);

export default routes;
