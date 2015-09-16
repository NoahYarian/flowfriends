'use strict';

var express = require('express'),
    app = module.exports = express(),
    routes = require('./routes/routes'),
    secrets = require('./config/secrets'),

    sass = require('node-sass-middleware'),
    morgan = require('morgan'),
    errorhandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');

mongoose.connect(secrets.db);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('www'));
app.use(sass({
  src: 'www/styles',
  dest: 'www/styles',
  outputStyle: 'nested',
  prefix: '/styles'

}));

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Express listening on port ' + app.get('port'));
  // console.log(`Express listening on port ${app.get('port')}`);
});

