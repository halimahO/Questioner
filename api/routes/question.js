import { Router } from 'express';
import questio from '../controllers/question';
import validator from '../validator/question';

const routes = Router();

routes.post('/', validator, questio.createQuestion);
routes.get('/', questio.getAllQuestion);
routes.get('/:id', questio.getOneQuestion);
routes.patch('/:id/upvote', questio.upvote);
routes.patch('/:id/downvote', questio.downvote);

export default routes;
