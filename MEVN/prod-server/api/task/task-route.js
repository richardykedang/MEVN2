'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/task', function (req, res) {
    res.send('get all');
});
router.get('/task/:id', function (req, res) {
    res.send('get id');
});
router.put('/task/:id', function (req, res) {
    res.send('update');
});
router.delete('task/:id', function (req, res) {
    res.send('delete');
});

exports.default = router;