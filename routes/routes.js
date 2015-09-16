'use strict';

var express = require('express');
var router = express.Router();
var api = require('./routes.api')

// serve index and view partials
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  console.log('rendering partial ' + name);
  res.render('partials/' + name);
});

// JSON API
router.use('/api', api);

// redirect all others to the index (HTML5 history)
router.get('*', function(req, res) {
  res.render('index');
});

module.exports = router;
