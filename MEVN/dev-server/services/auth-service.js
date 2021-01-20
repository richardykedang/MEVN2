/**
 * Used to perform all authentication-related operations
 * For example, generating a token, getting the username, etc.
 */

import jwt from 'jsonwebtoken';

export function generateJWT(user) {
    const tokenData = { username: user.username, id: user._id };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}