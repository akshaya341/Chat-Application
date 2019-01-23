const userService = require('../services/user.services');
const { check, validationResult } = require('express-validator/check');

exports.register = (req, res) => {
    var responseResult = {};
    console.log("inside register");

    check('firstName', 'firstname cannot be empty').isEmpty();
    check('firstName', 'firstname must contain only alphabets').isAlpha();
    check('lastName', 'lastname cannot be empty').isEmpty();
    check('lastName', 'lastname must contain only alphabets').isAlpha();
    check('email', 'email cannot be empty').isEmpty();
    check('email', 'username must be an email').isEmail();
    check('password', 'password cannot be empty').isEmpty();
    check('password', 'password must be atleast 8 characters long').isLength({ min: 8 });
    check('password','password must have atleast 1 digit').isNumeric();
    check('password','password must contain at least one uppercase ').isUppercase();
    
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(422).send({
    status: false,
    message: err,
    });
}

        userService.register(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })

    } 

exports.login = (req, res) => {
    
        var responseResult = {};

        check('email','email cannot be empty').isEmpty();
        check('email','must be valid email').isEmail();
        check('password','password cannot be empty').isEmpty();
        check('password','password must have atleast 8 character').isLength({min:8});

        const errors=validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(422).send({
                status:false,
                message: err,
            });
        }
        
        userService.login(req.body, (err, result) => {
            if(err){
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            } else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })

}







