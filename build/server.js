'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 8080;

app.use(_express2.default.json());

app.use('/', _index2.default);

app.listen(port, function () {
  console.log('Sever running on port ' + port);
});

exports.default = app;
//# sourceMappingURL=server.js.map