'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;

var _stringUtils = require('../../utilities/string-utils');

// User Register
function index(req, res) {
    var validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

    var user = {
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        first: req.body.first,
        last: req.body.last
    };
    console.log(user);
    return res.status(201).json();
}

function validateIndex(body) {
    var errors = '';
    if (_stringUtils.StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }
    if (_stringUtils.StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    if (_stringUtils.StringUtil.isEmpty(body.first)) {
        errors += 'First name is required. ';
    }
    if (_stringUtils.StringUtil.isEmpty(body.last)) {
        errors += 'Last name is required. ';
    }

    return {
        isValid: _stringUtils.StringUtil.isEmpty(errors),
        message: errors
    };
}