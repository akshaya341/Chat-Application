var users = require("../controller/usercontroller");
var express = require('express');
const router = express.Router();


// console.log("users",users.registration);

router.post('/login', users.login);
router.post('/register', users.register);
//router.post('/dashboard',users.dashboard);
// router.get('/:id/list',users.usersList);
// ConnectDB();
//router.use('/auth', authroute);

module.exports = router;