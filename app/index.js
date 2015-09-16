'use strict';

var express = require('express');
var app = module.exports = express();
var routes = require('./routes');
var secrets = require('../config/secrets');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.connect(secrets.db);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('www'));

app.use('/', routes);

var port = process.env.PORT || 3000;

app.listen(port);
console.log(`Express listening on port ${port}`);
