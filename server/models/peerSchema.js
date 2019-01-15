var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true });
var mongoSchema = mongoose.Schema;
var userSchema = new mongoSchema({
    'userid': { type: String, required: true },
    'receiverid':{type: String,required : true},
    'firstname': { type: String, required: true },
    'receivername': { type: String, required: true },
    'message': { type: String, required: true },
    'date': { type: String, required: true }
})

module.exports = mongoose.model('peerlogs', userSchema);