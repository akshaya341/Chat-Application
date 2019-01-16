var usermodel = require('../models/userSchema');
var jwt = require('jsonwebtoken');

module.exports.register = (req, res) => {
    console.log("inside register");
    try{
        var db = new usermodel();

        if (typeof req.body.firstname === 'undefined' || typeof req.body.lastname === 'undefined') {
            throw new Error("Name is required");
        }

        if (typeof req.body.email === 'undefined') {
            throw new Error("Email address is required");
        }


        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(req.body.email)) {
            throw new Error("Something went wrong in email");
        }

        var re = /^[a-zA-Z]{3,20}\S$/;
        if (!re.test(req.body.firstname) || !re.test(req.body.lastname)) {
            throw new Error("Something went wrong in name");
        }

        var re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        if (!re.test(req.body.password)) {
            throw new Error("password should contain atleast 8 characters with atleast 1 special charcter,1 numeric,1 Capital and small alphabet");
        }

        if (typeof req.body.password === 'undefined') {
            throw new Error("Password is required ");
        }
        db.firstname = req.body.firstname;
        db.lastname = req.body.lastname;
        db.email = req.body.email;
        db.password = req.body.password;
        usermodel.find({ 'email': email }, function (err, data) {
            // var hashedPassword = bcrypt.hashSync(req.body.password, 8);
            // if the email is not havinfg the data it will send error
            if (err) {
                response = {
                    "error": true, "message": "error", "err": err
                };
                return res.status(404).send(response);
            }
            // if data is present in email it will check the data length
            else {
                // save() will run insert() command of MongoDB.
                // it will add new data in collection.
                if (data.length > 0) {
                    response = { "error": true, "message": "Mail id exist", "err": err };
                    return res.status(500).json(response);
                    // return res.status(404).send(response);
                }
                else {
                    // save() will run insert() command of MongoDB.
                    // it will add new data in collection.
                    db.save(function (err) {
                        if (err) {

                            response = { "error": true, "message": "erroe Data " };
                        }
                        else {
                            response = { "error": false, "message": "Regiteration Successfully " };

                        }
                        return res.json(response); //.status(204).send(response);
                    });
                }
            }
        });
        // catcing the errors based on error types
    } catch (e) {
        console.log(e);
        if (e instanceof ReferenceError
            || e instanceof TypeError
            || e instanceof SyntaxError
            || e instanceof RangeError) {
                
            return res.status(500).json({
                "error": true,
                "message": "Something bad happened. Please contact system administrator"
            });
        } else {
            return res.status(500).json({
                "error": true,
                "message": e.message
            });
        }
    }
}
module.exports.login = (req, res) => {
    try {
        // declaring the variable to store response
        var response = {};
        // declaring the variable secret to generate tokens
        var secret = "adcgf";
        if (typeof req.body.email === 'undefined'&&typeof req.body.password === 'undefined') {
            throw new Error("Email address or password is required");
        }
        // finding the email and password wheather it is present in database or not and declaring the function 
        usermodel.find({ "email": req.body.email, "password": (req.body.password) }, function (err, data) {
            // if the data is not present response is stored as error
            if (err) {
                response = { "error": true, "message": "error" };
                return res.status(500).json(response);
            }
            // if data is present ,it will check the data length and it will generate the token for that particular login credentials
            else if (data.length > 0) {
                var token = jwt.sign({ email: req.body.email, password: req.body.password }, secret, { expiresIn: 86400000 }); // expires in 24 hours})
                response = { "error": false, "token": token, "message": "login successful", "firstname": data[0].firstname, "userid": data[0]._id };
                console.log(token);
            }
            // if the login credentials are not present it will declare as invalid
            else {
                response = { "error": true, "message": "invalid login credentials" };
            }
            return res.status(500).json(response);

        });
        // catcing the errors based on error types
    } catch (e) {
        console.log(e);
        if (e instanceof ReferenceError
            || e instanceof TypeError
            || e instanceof SyntaxError
            || e instanceof RangeError) {
            return res.status(500).json({
                "error": true,
                "message": "Something bad is happened at login page"
            });
        } else {
            return res.status(500).json({
                "error": true,
                "message": e.message
            })
        }
    }
}


    
    



