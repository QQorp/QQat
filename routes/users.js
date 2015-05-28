module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var User = require('../models/user');

  var fake_users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'John Undoe'},
    {id: 3, name: 'Hans Müller'}
  ];

  router.get('/', function(req, res, next){
    res.json(fake_users);
    next();
  });

  router.get('/:id', function(req, res, next){
    if(req.params.id > 0 && req.params.id < 4){
      res.json(fake_users[req.params.id]);
    }else{
      throw "Bad id";
    }
    next();
  });

  return router;

})();
