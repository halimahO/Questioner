'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meetup = function () {
  function Meetup() {
    _classCallCheck(this, Meetup);

    this.meetups = [];
  }

  // Model for create a meetup record


  _createClass(Meetup, [{
    key: 'createMeetup',
    value: function createMeetup(data) {
      var newId = function newId(array) {
        if (array.length > 0) {
          return array[array.length - 1].id + 1;
        }
        return 1;
      };
      var newMeetup = {
        id: Number(newId(this.meetups)),
        createdOn: (0, _moment2.default)().format('LLLL'),
        location: String(data.location),
        images: data.images,
        topic: String(data.topic),
        happeningOn: (0, _moment2.default)(data.happeningOn).format('LLLL'),
        tags: [data.tags]
      };
      this.meetups.push(newMeetup);
      return newMeetup;
    }

    // Model for fetch a specific meetup record

  }, {
    key: 'fetchOneMeetup',
    value: function fetchOneMeetup(id) {
      // eslint-disable-next-line eqeqeq
      return this.meetups.find(function (data) {
        return data.id == id;
      });
    }

    // Model for fetch all meetup records

  }, {
    key: 'fetchAllMeetup',
    value: function fetchAllMeetup() {
      return this.meetups;
    }

    // Model for fetch all upcoming meetup records

  }, {
    key: 'getUpcoming',
    value: function getUpcoming() {
      return this.meetups.filter(function (data) {
        return data.happeningOn >= (0, _moment2.default)().format('LLLL');
      });
    }
  }]);

  return Meetup;
}();

exports.default = new Meetup();
//# sourceMappingURL=meetup.js.map