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

describe('Test for question resource', function () {
  describe('POST /questions', function () {
    it('should not create a question for a meetup that does not exist', function (done) {
      var id = 5;
      _chai2.default.request(_server2.default).post('/' + id).end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });

  describe('PATCH /questions/<question-id>/upvote', function () {
    it('should not upvote a question that does not exist', function (done) {
      var id = 5;
      _chai2.default.request(_server2.default).patch('/api/v1/questions/' + id + '/upvote').end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });

  describe('PATCH /questions/<question-id>/downvote', function () {
    it('should not downvote a question that does not exist', function (done) {
      var id = 5;
      _chai2.default.request(_server2.default).post('/api/v1/questions/' + id + '/downvote').end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });
});
//# sourceMappingURL=questionTest.js.map