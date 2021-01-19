'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _stringUtils = require('../utilities/string-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    username: String,
    first: String,
    last: String,
    password: String
});
userSchema.set('timestamps', true);

// Returns a transient field client-side without actually adding it to the schema
userSchema.virtual('fullName').get(function () {
    var first = _stringUtils.StringUtil.capitalize(this.first.toLowerCase());
    var last = _stringUtils.StringUtil.capitalize(this.last.toLowerCase());
    return first + ' ' + last;
});

// Runs validation before saving a user
userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();

    next();
});

exports.default = _mongoose2.default.model('user', userSchema);