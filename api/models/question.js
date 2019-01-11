import moment from 'moment';

class Question {
  constructor() {
    this.questions = [];
  }

  createQuestion(data) {
    const newId = (array) => {
      if (array.length > 0) {
        return array[array.length - 1].id + 1;
      }
      return 1;
    };
    const newQuestion = {
      id: newId(this.questions),
      createdOn: moment().format('LLLL'),
      createdBy: 'userId',
      meetup: 'meetupId',
      title: data.title,
      body: data.body,
      votes: Number(0),
    };
    this.questions.push(newQuestion);
    return newQuestion;
  }

  fetchOneQuestion(id) {
    // eslint-disable-next-line eqeqeq
    return this.questions.find(data => data.id == id);
  }

  upvote(id) {
    const question = this.fetchOneQuestion(id);
    const index = this.questions.indexOf(question);
    this.questions[index].votes += 1;
    return this.questions[index];
  }

  downvote(id) {
    const question = this.fetchOneQuestion(id);
    const index = this.questions.indexOf(question);
    this.questions[index].votes -= 1;
    return this.questions[index];
  }
}

export default new Question();
