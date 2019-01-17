// import { validationResult } from 'express-validator/check';
// import QuestionModel from '../models/question';
import db from '../db';

const postQuestion = (request, response) => {
  const {
    createdBy, meetup, title, body, upvotes, downvotes,
  } = request.body;

  db.query('INSERT INTO users (location, images, topic, happeningOn, tags) VALUES ($1, $2, $3, $4, $5, $6)', [createdBy, meetup, title, body, upvotes, downvotes], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).json(results.rows);
  });
};

const upvote = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const { upvotes } = request.body;
  db.query(
    'UPDATE questions SET upvotes = $1 + 1 WHERE id = $2',
    [upvotes, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(404).json(results.rows);
    },
  );
};

const downvote = (request, response) => {
  const id = parseInt(request.params.id, 10);
  const { downvotes } = request.body;
  db.query(
    'UPDATE questions SET downvotes = $1 WHERE id = $2',
    [downvotes, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

module.exports = {
  postQuestion,
  upvote,
  downvote,
};
