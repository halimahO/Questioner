import moment from 'moment';
import { validationResult } from 'express-validator/check';
import MeetupModel from '../models/meetup';

const meetups = [];
const rsvps = [];

const Meetup = {


  createMeetup(req, res) {
    const meetup = new MeetupModel(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        status: 400,
        errors: errors.array(),
      });
    }
    if (!(moment(meetup.happeningOn).isValid())) {
      return res.status(400).send({
        message: 'Please use this format: "Friday, January 4, 2019 9:53 PM"',
      });
    }
    meetup.id = meetups.length + 1;
    meetups.push(meetup);
    return res.status(200).send({
      status: 201,
      data: [meetup],
    });
  },

  getOneMeetup(req, res) {
    const getMeetup = meetups.find(meetup => meetup.id === parseInt(req.params.id, 10));
    if (!getMeetup) {
      return res.status(404).send({
        message: 'Meetup not found',
      });
    }
    return res.status(201).send({
      status: 200,
      data: [{
        id: getMeetup.id,
        topic: getMeetup.topic,
        location: getMeetup.location,
        happeningOn: getMeetup.happeningOn,
        tags: getMeetup.tags,
      }],
    });
  },

  getAllMeetup(req, res) {
    return res.status(200).send({
      status: 200,
      data: meetups,
    });
  },

  getUpcoming(req, res) {
    const upcoming = meetups.filter(meetup => meetup.happeningOn <= moment().format('LLLL'));
    if (upcoming.length === 0 || upcoming === undefined) {
      return res.status(404).send({
        message: 'No upcoming meetup',
      });
    }
    return res.status(200).send({
      status: 200,
      data: upcoming,
    });
  },

  createRsvp(req, res) {
    const rsvp = req.body;
    if (!rsvp.status) {
      return res.status(400).send({
        message: 'status required',
      });
    }
    rsvp.id = rsvps.length + 1;
    rsvp.meetupId = req.params.id;
    rsvps.push(rsvp);
    return res.status(201).send({
      status: 201,
      data: {
        id: rsvp.id,
        meetup: rsvp.meetupId,
        status: rsvp.status,
      },
    });
  },
};
export default Meetup;
