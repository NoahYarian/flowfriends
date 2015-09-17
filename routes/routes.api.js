'use strict';

var express = require('express');
var router = express.Router();
var Pie = require('../models/pie');
var User = require('../models/user')

router.get('/', function(req, res) {
  res.json({ message: 'This be the API!' });
});

router.route('/users')
  .post(function(req, res) {

    var user = new User();
    user.name = req.body.name;
    user.emailAddress = req.body.emailAddress;
    user.location = req.body.location;
    user.avatar = req.body.avatar;
    user.facebookId = req.body.facebookId;
    user.headline = req.body.headline;
    user.friends = req.body.friends;

    user.save(function(err) {

      if (err) res.send(err);

      res.json({
        message: 'User created!',
        name: user.name,
        emailAddress: user.emailAddress,
        location: user.location,
        avatar: user.avatar,
        facebookId: user.facebookId,
        headline: user.headline,
        friends: user.friends,
      });

    });

  })

  .get(function(req, res) {

    User.find(function(err, users) {

      if (err) res.send(err);

      res.json(users);

    });

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
