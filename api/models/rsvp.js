class Rsvp {
  constructor() {
    this.rsvp = [];
  }

  // Model for a respond to meetup rsvp
  respondToRsvp(data) {
    const newId = (array) => {
      if (array.length > 0) {
        return array[array.length - 1].id + 1;
      }
      return 1;
    };
    const newRSVP = {
      id: Number(newId(this.rsvp)),
      meetup: 1,
      user: 1,
      topic: 'Meetup topic',
      response: String(data.response),
    };
    this.rsvp.push(newRSVP);
    return newRSVP;
  }
}

export default new Rsvp();
