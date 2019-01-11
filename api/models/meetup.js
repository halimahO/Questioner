import moment from 'moment';

class Meetup {
  constructor() {
    this.meetups = [];
  }

  createMeetup(data) {
    const newId = (array) => {
      if (array.length > 0) {
        return array[array.length - 1].id + 1;
      }
      return 1;
    };
    const newMeetup = {
      id: newId(this.meetups),
      createdOn: moment().format('LLLL'),
      location: data.location,
      images: data.images,
      topic: data.topic,
      happeningOn: moment(data.happeningOn).format('LLLL'),
      tags: [data.tags],
    };
    this.meetups.push(newMeetup);
    return newMeetup;
  }

  fetchOneMeetup(id) {
    // eslint-disable-next-line eqeqeq
    return this.meetups.find(data => data.id == id);
  }

  fetchAllMeetup() {
    return this.meetups;
  }

  getUpcoming() {
    return this.meetups.filter(data => data.happeningOn >= moment().format('LLLL'));
  }
}

export default new Meetup();
