
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var socket = require('socket.io');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ "extended": false }));
var router = require("../ChatAppMEAN/server/routers/router.js")
var users = require("../ChatAppMEAN/server/controller/usercontroller.js");
app.use('/', router);
app.use(express.static('./public'))
var server = app.listen(4200);
var io = socket(server);
io.on('connection', function (client) {
    console.log("user connected");
    client.on('disconnect', function () {
        console.log("disconnected")
    })
    client.on('chatbackend', function (data) {
        users.addingChat(data.userid, data.firstname, data.message, data.dateTime);
        io.emit('chatroomClient', data);

    })
    client.on('chatpeerbackend', function (data) {
        users.peertopeer(data.userid, data.firstname, data.receiverid, data.receivername, data.message, data.date)
        io.emit(data.receiverid, data)
    })
});
console.log("Listening to port 4200");