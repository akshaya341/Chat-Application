const userService = require('../services/user.services');
var jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    var responseResult = {};
    console.log("inside register");
    try {
        // if (typeof req.body.firstname === 'undefined' || typeof req.body.lastname === 'undefined') {
        //     throw new Error("Name is required");
        // }

        // if (typeof req.body.email === 'undefined') {
        //     throw new Error("Email address is required");
        // }
        // var em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if (!em.test(req.body.email)) {
        //     throw new Error("Something went wrong in email");
        // }

        // var name = /^[a-zA-Z]{3,20}\S$/;
        // if (!name.test(req.body.firstname) || !name.test(req.body.lastname)) {
        //     throw new Error("Something went wrong in name");
        // }

        // var pas = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        // if (!pas.test(req.body.password)) {
        //     throw new Error("password should contain atleast 8 characters and with atleast 1 special charcter,1 numeric,1 Capital and small alphabet");
        // }

        // if (typeof req.body.password === 'undefined') {
        //     throw new Error("Password is required ");
        // }
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

    } catch{

    }
}


exports.login = (req, res) => {
    try {
        var responseResult = {};
        // var secret = "adcgf869650468";
        // if (typeof req.body.email === 'undefined' && typeof req.body.password === 'undefined') {
        //     throw new Error("Email address or password is required");
        // }

        // usermodel.find({ "email": req.body.email, "password": (req.body.password) }, function (err, data) {
        //     if (err) {
        //         response = { "error": true, "message": "error" };
        //         return res.status(500).json(response);
        //     }
        //     else if (data.length > 0) {
        //         var token = jwt.sign({ email: req.body.email, password: req.body.password }, secret, { expiresIn: 86400000 }); // expires in 24 hours})
        //         response = { "error": false, "token": token, "message": "login successful", "firstname": data[0].firstname, "userid": data[0]._id };
        //         console.log(token);
        //     }
        //     else {
        //         response = { 'error': true, "message": "invalid login details" };
        //     }
        //     return res.status(500).json(response);

        // });
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
    catch (e) {
        // console.log(e);
        // if (e instanceof ReferenceError
        //     || e instanceof TypeError
        //     || e instanceof SyntaxError
        //     || e instanceof RangeError) {
        //     return res.status(500).json({
        //         "error": true,
        //         "message": "Something bad is happened at login page"
        //     });
        // } else {
        //     return res.status(500).json({
        //         "error": true,
        //         "message": e.message
        //     })
        // }
    }
}







