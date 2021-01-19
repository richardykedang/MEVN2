import mongoose from 'mongoose';
import { StringUtil } from '../utilities/string-utils';

const userSchema = new mongoose.Schema({
    username: String,
    first: String,
    last: String,
    password: String
});
userSchema.set('timestamps', true);

// Returns a transient field client-side without actually adding it to the schema
userSchema.virtual('fullName').get(function() {
    const first = StringUtil.capitalize(this.first.toLowerCase());
    const last = StringUtil.capitalize(this.last.toLowerCase());
    return `${first} ${last}`;
});

// Runs validation before saving a user
userSchema.pre('save', function(next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();

    next();
});

export default mongoose.model('user', userSchema);