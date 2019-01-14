import moment from 'moment';

export default class Question {
  constructor(question) {
    this.id = question.id;
    this.createdOn = moment().format('LLLL');
    this.createdBy = question.createdBy;
    this.meetup = question.meetupId;
    this.title = question.title;
    this.body = question.body;
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
