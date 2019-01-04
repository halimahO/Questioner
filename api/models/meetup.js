import moment from 'moment';

class Meetup {
  constructor() {
    this.meetups = [];
  }

  // Model for create a meetup record
  createMeetup(data) {
    const newId = (array) => {
      if (array.length > 0) {
        return array[array.length - 1].id + 1;
      }
      return 1;
    };
    const newMeetup = {
      id: Number(newId(this.meetups)),
      createdOn: moment().format('LLLL'),
      location: String(data.location),
      images: data.images,
      topic: String(data.topic),
      happeningOn: moment(data.happeningOn).format('LLLL'),
      tags: [data.tags],
    };
    this.meetups.push(newMeetup);
    return newMeetup;
  }

  // Model for fetch a specific meetup record
  fetchOneMeetup(id) {
    // eslint-disable-next-line eqeqeq
    return this.meetups.find(data => data.id == id);
  }

  // Model for fetch all meetup records
  fetchAllMeetup() {
    return this.meetups;
  }

  // Model for fetch all upcoming meetup records
  getUpcoming() {
    return this.meetups.filter(data => data.happeningOn >= moment().format('LLLL'));
  }
}

export default new Meetup();
