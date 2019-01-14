export default class Rsvp {
  constructor(rsvp) {
    this.id = rsvp.id;
    this.meetup = rsvp.meetupId;
    this.user = rsvp.userId;
    this.topic = rsvp.meetupTopic;
    this.response = rsvp.response;
  }
}
