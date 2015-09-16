'use strict';

var express = require('express');
var app = module.exports = express();
var routes = require('./routes');

var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

var port = process.env.PORT || 3000;

app.listen(port);
console.log(`Express listening on port ${port}`);
