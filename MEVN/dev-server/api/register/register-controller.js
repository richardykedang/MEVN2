import { StringUtil } from '../../utilities/string-utils';

// User Register
export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

    const user = {
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        first: req.body.first,
        last: req.body.last
    }
    console.log(user);
    return res.status(201).json();
}

function validateIndex(body) {
    let errors = '';
    if (StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }
    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    if (StringUtil.isEmpty(body.first)) {
        errors += 'First name is required. ';
    }
    if (StringUtil.isEmpty(body.last)) {
        errors += 'Last name is required. ';
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}
