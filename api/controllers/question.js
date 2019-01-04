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

};

export default Question;
