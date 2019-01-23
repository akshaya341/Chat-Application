var mongoose = require("mongoose");
const bcrypt=require('bcrypt');
let saltRounds = 10;
var mongoSchema = mongoose.Schema;
var userSchema = new mongoSchema({
    'firstname': { type: String, },
    'lastname': { type: String, },
    'email': { type: String, },
    'password': { type: String, },
   
});
const user = mongoose.model('userData', userSchema);

function userFunction() {

}

userFunction.prototype.save = (data, callback) => {
    data.password =  bcrypt.hashSync(data.password,saltRounds);
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
        }
         else 
         {
             if (result != null && result.email==data.email) {
           
            if (result !=null &&result.password,data.password) 
            {
                callback(null, result);
  
         } 
         else {
                callback("wrong password");
            }
        } else {
            callback("user not found")
        }
    }
    })
}

module.exports = new userFunction();  

