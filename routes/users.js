module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var User = require('../models/user');

  router.get('/', function(req, res, next){
    User.find({}).sort({registrationDate: 'descending'}).exec(function(err, users){
      if(err) res.send(err);
      res.json(users);
    });
  });

  return router;

})();
