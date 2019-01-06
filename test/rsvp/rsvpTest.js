// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

const { describe, it } = require('mocha');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Test for RSVP resource', () => {
  describe('POST /meetups/<meetup-id>/rsvps', () => {
    it('should not respond to meetup RSVP that does not exist', (done) => {
      const id = 1;
      chai.request(app)
        .post(`/api/v1/meetups/${id}/rsvps`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
