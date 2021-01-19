'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //const express = require('express')


(0, _routes.registerRoutes)(app);
var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello rld!');
});

app.listen(port, function () {
  console.log('Example app listening at http://localhost:' + port);
});