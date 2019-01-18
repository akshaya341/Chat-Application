var mongoose = require("mongoose");
var mongoSchema = mongoose.Schema;
var userSchema = new mongoSchema({
    'firstname': { type: String, },
    'lastname': { type: String, },
    'email': { type: String, },
    'password': { type: String, },
    // 'conformpassword': {type: String,  required: true},
    // 'mobile'     : { type: Number, required: true}

});
const user = mongoose.model('userData', userSchema);

function userFunction() {

}

userFunction.prototype.save = (data, callback) => {
    var newData = new user(data);
    newData.save(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

userFunction.prototype.login = (data, callback) => {
    user.findOne({ "email": data.email }, (err, result) => {
        if (err) {
            callback(err);
        } else if (result != null) {
            if (result.password == data.password) {
                callback(null, result);
            } else {
                callback("wrong password");
            }
        } else {
            callback("user not found")
        }
    })
}

module.exports = new userFunction();