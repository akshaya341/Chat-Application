const express = require('express');
const bodyParser = require('body-parser');
const route= require('../server/router/router');
const dbConfig = require('./configure/config.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/api',route);
app.use(express.static('../client'));
mongoose.connect(dbConfig.url, {
useNewUrlParser: true
}).then(() => {
console.log("Successfully connected to the database");
}).catch(err => {
console.log('Could not connect to the database. Exiting now...', err);
process.exit();
});

// define a simple route
// app.get('/', (req, res) => {
// res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });

// listen for requests
app.listen(4200,() => {
console.log("Server is listening on port 4200");
});