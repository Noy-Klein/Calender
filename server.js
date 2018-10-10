const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const SERVER_PORT = 1234;

mongoose.connect('mongodb://localhost/calendarDB', function () {
    console.log("DB connection established!!!");
})

const event = require('./models/event');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/events', function (req, res) {
    event.find({}, function (err, data) {
        if (err) {
            console.err(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
});

app.post('/events', function(req, res) {
    event.create(req.body, function(err, data) {
        if (err) {
            console.err(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
});

app.delete('/events/:id', function(req,res){
    let id = req.params.id;
    event.findByIdAndRemove(id).exec(function(err, data){
        if(err){res.status(500).send(err)}
        res.send(data);
        console.log('deleted!')
    })
})

app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});