import { validationResult } from 'express-validator/check';
import QuestionModel from '../models/question';

const questions = [];
const Question = {

  createQuestion(req, res) {
    const question = new QuestionModel(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        status: 400,
        errors: errors.array(),
      });
    }
    question.id = questions.length + 1;
    questions.push(question);
    return res.status(200).send({
      status: 201,
      data: {
        id: question.id,
        title: question.title,
        body: question.body,
      },
    });
  },

  getOneQuestion(req, res) {
    const getQuestion = questions.find(question => question.id === parseInt(req.params.id, 10));
    if (!getQuestion) {
      return res.status(404).send({
        message: 'Question not found',
      });
    }
    return res.status(201).send({
      status: 201,
      data: getQuestion,
    });
  },

  getAllQuestion(req, res) {
    return res.status(200).send({
      status: 200,
      data: questions,
    });
  },

  upvote(req, res) {
    const question = questions[req.params.id - 1];
    if (!question) {
      return res.status(404).send({
        message: 'Question not found',
      });
    }
    question.upvotes += 1;
    return res.status(200).send({
      status: 200,
      data: question,
    });
  },

  downvote(req, res) {
    const question = questions[req.params.id - 1];
    if (!question) {
      return res.status(404).send({
        message: 'Question not found',
      });
    }
    question.downvotes -= 1;
    return res.status(200).send({
      status: 200,
      data: question,
    });
  },
};

export default Question;
