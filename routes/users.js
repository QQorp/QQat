module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var fake_users = require('./data').fake_users;

  router.get('/', function(req, res, next){
    res.json(fake_users);
    next();
  });

  router.get('/:id', function(req, res, next){
    if(req.params.id > -1 && req.params.id < fake_users.length){
      res.json(fake_users[req.params.id]);
    }else{
      throw "Bad id";
    }
    next();
  });

  return router;

})();
