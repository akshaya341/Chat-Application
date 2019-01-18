const userModel = require('../app/models/userSchema');

exports.register = (data, callback) => {
    userModel.save(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.login = (data, callback) => {
    userModel.login(data, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}