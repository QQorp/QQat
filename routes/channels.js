module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var Channel = require('../models/channel');

  var fake_channels = require('./data').fake_channels;
  var fake_messages = require('./data').fake_messages;

  router.get('/', function(req, res, next){
    res.json(fake_channels);
    next();
  });

  router.get('/:id', function(req, res, next){
    if(req.params.id > -1 && req.params.id < fake_channels.length){
      res.json(fake_channels[req.params.id]);
    }else{
      throw "Bad id";
    }
    next();
  });

  router.get('/:id/messages', function(req, res, next){
    if(req.params.id > -1 && req.params.id < fake_channels.length){
      var results = [];
      for (var i = 0; i < fake_messages.length; i++) {
        if(fake_messages[i].channel_id == req.params.id){
          results.push(fake_messages[i]);
        }
      }
      res.json(results);
    }else{
      throw "Bad id";
    }
    next();
  });

  return router;

})();
