import { check } from 'express-validator/check';

const meetup = [
  check('title')
    .not().isEmpty()
    .withMessage('title is required'),

  check('body')
    .not().isEmpty()
    .withMessage('body is required'),
];

export default meetup;
