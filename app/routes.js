'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.redirect('index.html');
});

router.get('/api', function(req, res) {
  res.json({ message: 'This be the API!' });
});

module.exports = router;
