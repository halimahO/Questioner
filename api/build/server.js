'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate express
var app = (0, _express2.default)();

// Set the port
var port = process.env.PORT || 3000;

// Configure app to use json format
app.use(_express2.default.json());

// Register routes in app
app.use('/', _index2.default);

// Start the server
app.listen(port, function () {
  console.log('Sever running on port ' + port);
});

// Export app for testing purpose
exports.default = app;