'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rsvp = function () {
  function Rsvp() {
    _classCallCheck(this, Rsvp);

    this.rsvp = [];
  }

  // Model for a respond to meetup rsvp


  _createClass(Rsvp, [{
    key: 'respondToRsvp',
    value: function respondToRsvp(data) {
      var newId = function newId(array) {
        if (array.length > 0) {
          return array[array.length - 1].id + 1;
        }
        return 1;
      };
      var newRSVP = {
        id: Number(newId(this.rsvp)),
        meetup: 1,
        user: 1,
        topic: 'Meetup topic',
        response: String(data.response)
      };
      this.rsvp.push(newRSVP);
      return newRSVP;
    }
  }]);

  return Rsvp;
}();

exports.default = new Rsvp();
//# sourceMappingURL=rsvp.js.map