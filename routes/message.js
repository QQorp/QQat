module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var Message = require('../models/message');

  router.get('/', function(req, res, next){
    Message.find({}).sort({date: 'descending'}).exec(function(err, messages){
      if(err) res.send(err);
      res.json(messages);
    });
  });

  return router;

})();
