const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const SERVER_PORT = 1234;

mongoose.connect('mongodb://localhost/calendarDB', function() {
  console.log("DB connection established!!!");
})

const event = require('./modules/event');   
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
  });