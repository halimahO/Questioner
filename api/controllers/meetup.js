import moment from 'moment';
import meetupModel from '../models/meetup';

const Meetup = {
  createMeetup(req, res) {
    if (!req.body.location || !req.body.topic || !req.body.happeningOn) {
      return res.status(400).send({
        message: 'The fields location, topic and happeningOn are required',
      });
    }
    if (!(moment(req.body.happeningOn).isValid())) {
      return res.status(400).send({
        message: 'Please use this format: "Friday, January 4, 2019 9:53 PM"',
      });
    }
    const meetup = meetupModel.createMeetup(req.body);
    return res.status(201).send({
      status: 201,
      data: [{
        topic: meetup.topic,
        location: meetup.location,
        happeningOn: meetup.happeningOn,
        tags: meetup.tags,
      }],
    });
  },

  getOneMeetup(req, res) {
    const meetup = meetupModel.fetchOneMeetup(req.params.id);
    if (!meetup) {
      return res.status(404).send({
        message: 'Meetup not found',
      });
    }
    return res.status(200).send({
      status: 200,
      data: [{
        id: meetup.id,
        topic: meetup.topic,
        location: meetup.location,
        happeningOn: meetup.happeningOn,
        tags: meetup.tags,
      }],
    });
  },
  getAllMeetup(req, res) {
    const meetup = meetupModel.fetchAllMeetup();
    return res.status(200).send({
      status: 200,
      data: meetup,
    });
  },
  getUpcoming(req, res) {
    const upcoming = meetupModel.getUpcoming();
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
};

export default Meetup;
