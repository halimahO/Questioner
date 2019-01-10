'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rsvp = require('../models/rsvp');

var _rsvp2 = _interopRequireDefault(_rsvp);

var _meetup = require('../models/meetup');

var _meetup2 = _interopRequireDefault(_meetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Controller for respond to meetup rsvp
var RSVP = {
  respondToRsvp: function respondToRsvp(req, res) {
    var meetupId = _meetup2.default.fetchOneMeetup(req.params.id);
    if (!meetupId) {
      return res.status(404).send({
        message: 'Cant rsvp for meetup that does not exist'
      });
    }

    if (!req.body.response) {
      return res.status(400).send({
        message: 'Fill in your status'
      });
    }
    var rsvp = _rsvp2.default.respondToRsvp(req.body);
    return res.status(200).send({
      status: 200,
      data: [{
        meetup: rsvp.meetup,
        topic: rsvp.topic,
        status: rsvp.response

      }]
    });
  }
};

exports.default = RSVP;
//# sourceMappingURL=rsvp.js.map