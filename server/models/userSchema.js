var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/userdb',{ useNewUrlParser: true });
var mongoSchema =   mongoose.Schema;
var userSchema  = new mongoSchema({
             'firstname'  : {type : String, required: true},
             'lastname'   : {type: String, required: true},
            'email'    : { type: String,  required: true},
            'password'   : {type: String,  required: true},
            

            });
module.exports = mongoose.model('userLogin',userSchema);