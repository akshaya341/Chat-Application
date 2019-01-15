var mongoose = require("mongoose");
//var connect= require('../config/config');
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true });

var mongoSchema = mongoose.Schema;

var userSchema = new mongoSchema({
    'userid': { type: String, required: true },
    'firstname': { type: String, required: true },
    'message': { type: String, required: true },
    'dateTime': { type: String, required: true }
})
module.exports = mongoose.model('chatlog', userSchema);