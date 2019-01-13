import RsvpModel from '../models/rsvp';
import meetupController from './meetup';

const rsvps = [];

const Rsvp = {
  createRsvp(req, res) {
    const meetupId = meetupController.getOneMeetup(req.params.id);
    if (!meetupId) {
      return res.status(404).send({
        message: 'Cant rsvp for meetup that does not exist',
      });
    }

    if (!req.body.response) {
      return res.status(400).send({
        message: 'Fill in your status',
      });
    }
    const rsvp = new RsvpModel(req.body);
    rsvp.id = rsvps.length + 1;
    rsvp.meetup = meetupId.id;
    rsvp.topic = meetupId.topic;
    rsvps.push('rsvp');
    return res.status(200).send({
      status: 200,
      data: [{
        meetup: rsvp.meetup,
        topic: rsvp.topic,
        status: rsvp.response,

      }],
    });
  },

};

export default Rsvp;
