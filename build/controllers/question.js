'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _question = require('../models/question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Controller for create a question
var Question = {
  createQuestion: function createQuestion(req, res) {
    if (!req.body.title || !req.body.body) {
      return res.status(400).send({
        message: 'The fields title and body are required'
      });
    }
    var question = _question2.default.createQuestion(req.body);
    return res.status(201).send({
      status: 201,
      data: [{
        user: question.createdBy,
        meetup: question.meetup,
        title: question.title,
        body: question.body

      }]
    });
  },


  // Controller for upvote a question
  upvote: function upvote(req, res) {
    var question = _question2.default.fetchOneQuestion(req.params.id);
    if (!question) {
      return res.status(404).send({
        message: 'Question not found'
      });
    }
    var questionVote = _question2.default.upvote(req.params.id);
    return res.status(200).send({
      status: 200,
      data: [{
        meetup: questionVote.meetup,
        title: questionVote.title,
        body: questionVote.body,
        votes: questionVote.votes

      }]
    });
  },


  // Controller for downvote a question
  downvote: function downvote(req, res) {
    var question = _question2.default.fetchOneQuestion(req.params.id);
    if (!question) {
      return res.status(404).send({
        message: 'Question not found'
      });
    }
    var questionVote = _question2.default.downvote(req.params.id);
    return res.status(200).send({
      status: 200,
      data: [{
        meetup: questionVote.meetup,
        title: questionVote.title,
        body: questionVote.body,
        votes: questionVote.votes

      }]
    });
  }
};

exports.default = Question;
//# sourceMappingURL=question.js.map