import moment from 'moment';
import meetupModel from '../models/meetup';

const Meetup = {
// Controller for create a meetup record
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
};

export default Meetup;
