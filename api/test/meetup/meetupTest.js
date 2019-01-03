// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

const { describe, it } = require('mocha');
// Configure chai
chai.use(chaiHttp);
chai.should();

const meetups = [
  {
    id: 1,
    topic: 'topic',
    createdOn: 24,
    location: 'topic',
    happeningOn: 24,
  },
  {
    id: 2,
    topic: 'topic',
    createdOn: 24,
    location: 'topic',
    happeningOn: 24,
  },
  {
    topic: 'topic',
    createdOn: 24,
    location: 'topic',
    happeningOn: 24,
  },
];

meetups.id = 1;
meetups.topic = 'hg';
meetups.happeningOn = '';
meetups.location = 'lop';

describe('Test for meetup resource', () => {
  describe('POST /meetups', () => {
    it('should create an meetup record', (done) => {
      chai.request(app)
        .post('/api/v1/meetups')
        .send({
          location: '2, Awolowo way, Ikoyi',
          images: ['sample-image1', 'sample-image2'],
          topic: 'How to be a better developer',
          happeningOn: 'Wednesday, January 9, 2019 3:19 PM',
          tags: ['tag1', 'tag2'],
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('GET /meetups/<meetup-id>', () => {
    it('should not fetch a meetup that does exist', (done) => {
      const id = 5;
      chai.request(app)
        .get(`/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('GET /meetups/', () => {
    it('should fetch all meetup records', (done) => {
      chai.request(app)
        .get('/api/v1/meetups')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('GET /meetups/upcoming/', () => {
    it('should fetch all upcoming meetup records', (done) => {
      chai.request(app)
        .get('/api/v1/meetups/upcoming')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
