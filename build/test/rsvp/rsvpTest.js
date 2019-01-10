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

describe('Test for RSVP resource', function () {
  describe('POST /meetups/<meetup-id>/rsvps', function () {
    it('should not respond to meetup RSVP that does not exist', function (done) {
      var id = 1;
      _chai2.default.request(_server2.default).post('/api/v1/meetups/' + id + '/rsvps').end(function (err, res) {
        res.should.have.status(404);
        done();
      });
    });
  });
});
//# sourceMappingURL=rsvpTest.js.map