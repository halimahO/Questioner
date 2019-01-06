import rsvpModel from '../models/rsvp';
import meetupModel from '../models/meetup';

// Controller for respond to meetup rsvp
const RSVP = {
  respondToRsvp(req, res) {
    const meetupId = meetupModel.fetchOneMeetup(req.params.id);
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
    const rsvp = rsvpModel.respondToRsvp(req.body);
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

export default RSVP;
