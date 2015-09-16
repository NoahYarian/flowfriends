'use strict';

var express = require('express');
var router = express.Router();
var Pie = require('./models/pie');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res){
  res.redirect('index.html');
});

router.get('/api', function(req, res) {
  res.json({ message: 'This be the API!' });
});

router.post('/pies', function(req, res) {

    var pie = new Pie();      // create a new instance of the Pie model
    pie.flavor = req.body.flavor;  // set the pie name (comes from the request)

    // save the bear and check for errors
    pie.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Pie created!' });
    });

  });

module.exports = router;
