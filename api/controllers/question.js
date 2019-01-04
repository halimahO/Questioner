import questionModel from '../models/question';

// Controller for create a question
const Question = {
  createQuestion(req, res) {
    if (!req.body.title || !req.body.body) {
      return res.status(400).send({
        message: 'The fields title and body are required',
      });
    }
    const question = questionModel.createQuestion(req.body);
    return res.status(201).send({
      status: 201,
      data: [{
        user: question.createdBy,
        meetup: question.meetup,
        title: question.title,
        body: question.body,

      }],
    });
  },

  // Controller for upvote a question
  upvote(req, res) {
    const question = questionModel.fetchOneQuestion(req.params.id);
    if (!question) {
      return res.status(404).send({
        message: 'Question not found',
      });
    }
    const questionVote = questionModel.upvote(req.params.id);
    return res.status(200).send({
      status: 200,
      data: [{
        meetup: questionVote.meetup,
        title: questionVote.title,
        body: questionVote.body,
        votes: questionVote.votes,

      }],
    });
  },
};

export default Question;
