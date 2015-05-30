module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var fake_messages = require('./data').fake_messages;

  router.get('/', function(req, res, next){
    res.json(fake_messages);
    next();
  });

  router.get('/:id', function(req, res, next){
    if(req.params.id > -1 && req.params.id < fake_messages.length){
      res.json(fake_messages[req.params.id]);
    }else{
      throw "Bad id";
    }
    next();
  });

  return router;

})();
