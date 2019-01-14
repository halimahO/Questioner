import { check } from 'express-validator/check';

const meetup = [
  check('location')
    .not().isEmpty().withMessage('location is required')
    .isLength({ min: 5 })
    .withMessage('Minimum length is 5'),

  check('topic')
    .not().isEmpty()
    .withMessage('topic is required'),

  check('happeningOn')
    .not().isEmpty()
    .withMessage('happeningOn is required'),
];

export default meetup;
