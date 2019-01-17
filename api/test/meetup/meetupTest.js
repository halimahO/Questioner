import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

const { describe, it } = require('mocha');

console.log(process.env.NODE_ENV);

chai.use(chaiHttp);
chai.should();

describe('Test for meetup resource', () => {
  describe('POST /meetups', () => {
    it('should create a meetup record', (done) => {
      chai.request(app)
        .post('/api/v1/meetups')
        .send({
          location: '2, Awolowo way, Ikoyi',
          images: 'sample-image1',
          topic: 'How to be a better developer',
          happeningOn: '2019/1/1',
          tags: 'tag2',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('GET /meetups/<meetup-id>', () => {
    it('should fetch a meetup that exist', (done) => {
      chai.request(app)
        .get('/api/v1/meetups/1')
        .end((err, res) => {
          res.should.have.status(200);
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
        .get('/api/v1/meetups/upcoming/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
