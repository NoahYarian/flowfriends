var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    emailAddress: String,
    location: String,
    avatar: String,
    facebookId: String,
    headline: String,
    friends: Array
});

module.exports = mongoose.model('User', UserSchema);
