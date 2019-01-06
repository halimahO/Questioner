'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
  function Question() {
    _classCallCheck(this, Question);

    this.questions = [];
  }

  // Model for create a question


  _createClass(Question, [{
    key: 'createQuestion',
    value: function createQuestion(data) {
      var newId = function newId(array) {
        if (array.length > 0) {
          return array[array.length - 1].id + 1;
        }
        return 1;
      };
      var newQuestion = {
        id: Number(newId(this.questions)),
        createdOn: (0, _moment2.default)().format('LLLL'),
        createdBy: 'userId',
        meetup: 'meetupId',
        title: String(data.title),
        body: String(data.body),
        votes: Number(0)
      };
      this.questions.push(newQuestion);
      return newQuestion;
    }
  }, {
    key: 'fetchOneQuestion',
    value: function fetchOneQuestion(id) {
      // eslint-disable-next-line eqeqeq
      return this.questions.find(function (data) {
        return data.id == id;
      });
    }

    // Model for upvote a question

  }, {
    key: 'upvote',
    value: function upvote(id) {
      var question = this.fetchOneQuestion(id);
      var index = this.questions.indexOf(question);
      this.questions[index].votes += 1;
      return this.questions[index];
    }

    // Model for downvote a question

  }, {
    key: 'downvote',
    value: function downvote(id) {
      var question = this.fetchOneQuestion(id);
      var index = this.questions.indexOf(question);
      this.questions[index].votes -= 1;
      return this.questions[index];
    }
  }]);

  return Question;
}();

exports.default = new Question();
//# sourceMappingURL=question.js.map