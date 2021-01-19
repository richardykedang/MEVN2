'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _stringUtils = require('../../utilities/string-utils');

function index(req, res) {
    // First verify that the user provided a username and a password
    var validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }
    return res.status(200).json();
}

function validateIndex(body) {
    var errors = '';

    if (_stringUtils.StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }

    if (_stringUtils.StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }

    return {
        isValid: _stringUtils.StringUtil.isEmpty(errors),
        message: errors
    };
}