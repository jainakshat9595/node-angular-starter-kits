// server.js

// modules =====================================================================
var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configuration ===============================================================

// config files
var db = require('./config/db');
var port = process.env.PORT || 8080; // set our port
// mongoose.conntect(db.url); // connect to our mongoDB database

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd+api.json'}));
app.use(bodyParser.urlencoded({ extent: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// routes =====================================================================
require('./app/routes')(app); // configure our routes

// start app ==================================================================
app.listen(port);
console.log('Magic happens on port '+port);
exports = module.exports = app;

