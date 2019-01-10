'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('mocha'),
    describe = _require.describe,
    it = _require.it;
// Configure chai
// Import the dependencies for testing


_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();

describe('Test for meetup resource', function () {
  describe('POST /meetups', function () {
    it('should create an meetup record', function (done) {
      _chai2.default.request(_server2.default).post('/api/v1/meetups').send({
        location: '2, Awolowo way, Ikoyi',
        images: ['sample-image1', 'sample-image2'],
        topic: 'How to be a better developer',
        happeningOn: 'Wednesday, January 9, 2019 3:19 PM',
        tags: ['tag1', 'tag2']
      }).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
    });
  });

  describe('GET /meetups/<meetup-id>', function () {
    it('should not fetch a meetup that does exist', function (done) {
      var id = 5;
      _chai2.default.request(_server2.default).get('/' + id).end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });

  describe('GET /meetups/', function () {
    it('should fetch all meetup records', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/meetups').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });

  describe('GET /meetups/upcoming/', function () {
    it('should fetch all upcoming meetup records', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/meetups/upcoming').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});
//# sourceMappingURL=meetupTest.js.map