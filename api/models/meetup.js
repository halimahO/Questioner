import moment from 'moment';

export default class Meetups {
  constructor(meetup) {
    this.id = meetup.id;
    this.createdOn = moment().format('LLLL');
    this.location = meetup.location;
    this.images = meetup.images;
    this.topic = meetup.topic;
    this.happeningOn = moment(meetup.happeningOn).format('LLLL');
    this.tags = meetup.tags;
  }
}
