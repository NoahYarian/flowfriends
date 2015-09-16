'use strict';

var express = require('express');
var router = express.Router();
var Pie = require('../models/pie');


router.get('/', function(req, res) {
  res.json({ message: 'This be the API!' });
});


router.route('/pies')

  .post(function(req, res) {

    var pie = new Pie();      // create a new instance of the Pie model
    pie.flavor = req.body.flavor;  // set the pie flavor (comes from the request)

    // save the pie and check for errors
    pie.save(function(err) {

      if (err) res.send(err);

      res.json({
        message: 'Pie created!',
        flavor: pie.flavor
      });

    });

  })

  .get(function(req, res) {

    Pie.find(function(err, pies) {

      if (err) res.send(err);

      res.json(pies);

    });

  });

module.exports = router;
