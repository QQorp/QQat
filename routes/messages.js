module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var Message = require('../models/message');

  // List all users
  router.get('/', function(req, res, next){
    Message.find({}).sort({date: 'descending'}).exec(function(err, messages){
      if (err) return next(err);
      res.json(messages);
    });
  });

  // Return the user with the id given
  router.get('/:id', function(req, res, next){
    Message.findById(req.params.id, function(err, message){
      if (err) return next(err);
      res.json(message);
    });
  });

  // Create a Message with informations given
  router.post('/', function(req, res, next) {
    Message.create(req.body, function (err, message) {
      if (err) return next(err);
      res.json(message);
    });
  });

  // Update a Message according to the id
  router.put('/:id', function(req, res, next) {
    Message.findByIdAndUpdate(req.params.id, req.body, function (err, message) {
      if (err) return next(err);
      res.json(message);
    });
  });

  // Delete a message according to the id
  router.delete('/:id', function(req, res, next) {
    Message.findByIdAndRemove(req.params.id, req.body, function (err, message) {
      if (err) return next(err);
      res.json(message);
    });
  });

  return router;

})();
