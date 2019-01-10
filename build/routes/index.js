'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _meetup = require('../controllers/meetup');

var _meetup2 = _interopRequireDefault(_meetup);

var _question = require('../controllers/question');

var _question2 = _interopRequireDefault(_question);

var _rsvp = require('../controllers/rsvp');

var _rsvp2 = _interopRequireDefault(_rsvp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.get('/', function () {
  return 'Welcome, please use /api/v1/meetups to get meetups';
});
routes.get('/api/v1', function () {
  return 'Welcome, please use /api/v1/meetups to get meetups';
});
routes.post('/api/v1/meetups', _meetup2.default.createMeetup);
routes.get('/api/v1/meetups/upcoming', _meetup2.default.getUpcoming);
routes.get('/api/v1/meetups/:id', _meetup2.default.getOneMeetup);
routes.get('/api/v1/meetups', _meetup2.default.getAllMeetup);
routes.post('/api/v1/questions', _question2.default.createQuestion);
routes.patch('/api/v1/questions/:id/upvote', _question2.default.upvote);
routes.patch('/api/v1/questions/:id/downvote', _question2.default.downvote);
routes.post('/api/v1/meetups/:id/rsvps', _rsvp2.default.respondToRsvp);

exports.default = routes;
//# sourceMappingURL=index.js.map