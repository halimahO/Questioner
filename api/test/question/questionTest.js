import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

const { describe, it } = require('mocha');

chai.use(chaiHttp);
chai.should();

describe('Test for question resource', () => {
  describe('POST /questions', () => {
    it('should not create a question for a meetup that does not exist', (done) => {
      const id = 35;
      chai.request(app)
        .post(`/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('PATCH /questions/<question-id>/upvote', () => {
    it('should not upvote a question that does not exist', (done) => {
      const id = 5;
      chai.request(app)
        .patch(`/api/v1/questions/${id}/upvote`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('PATCH /questions/<question-id>/downvote', () => {
    it('should not downvote a question that does not exist', (done) => {
      const id = 5;
      chai.request(app)
        .post(`/api/v1/questions/${id}/downvote`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
