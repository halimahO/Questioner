'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _meetup = require('../models/meetup');

var _meetup2 = _interopRequireDefault(_meetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Controller for create a meetup record
var Meetup = {
  createMeetup: function createMeetup(req, res) {
    if (!req.body.location || !req.body.topic || !req.body.happeningOn) {
      return res.status(400).send({
        message: 'The fields location, topic and happeningOn are required'
      });
    }
    if (!(0, _moment2.default)(req.body.happeningOn).isValid()) {
      return res.status(400).send({
        message: 'Please use this format: "Friday, January 4, 2019 9:53 PM"'
      });
    }
    var meetup = _meetup2.default.createMeetup(req.body);
    return res.status(201).send({
      status: 201,
      data: [{
        topic: meetup.topic,
        location: meetup.location,
        happeningOn: meetup.happeningOn,
        tags: meetup.tags
      }]
    });
  },

  // Controller for fetch a specific meetup record
  getOneMeetup: function getOneMeetup(req, res) {
    var meetup = _meetup2.default.fetchOneMeetup(req.params.id);
    if (!meetup) {
      return res.status(404).send({
        message: 'Meetup not found'
      });
    }
    return res.status(200).send({
      status: 200,
      data: [{
        id: meetup.id,
        topic: meetup.topic,
        location: meetup.location,
        happeningOn: meetup.happeningOn,
        tags: meetup.tags
      }]
    });
  },

  // Controller for fetch all meetup records
  getAllMeetup: function getAllMeetup(req, res) {
    var meetup = _meetup2.default.fetchAllMeetup();
    return res.status(200).send({
      status: 200,
      data: meetup
    });
  },
  getUpcoming: function getUpcoming(req, res) {
    var upcoming = _meetup2.default.getUpcoming();
    if (upcoming.length === 0 || upcoming === undefined) {
      return res.status(404).send({
        message: 'No upcoming meetup'
      });
    }
    return res.status(200).send({
      status: 200,
      data: upcoming
    });
  }
};

exports.default = Meetup;
//# sourceMappingURL=meetup.js.map