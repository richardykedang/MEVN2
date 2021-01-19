import { StringUtil } from '../../utilities/string-utils';

export function index(req, res) {
    // First verify that the user provided a username and a password
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }
    return res.status(200).json();
}

function validateIndex(body) {
    let errors = '';

    if (StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }

    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}
