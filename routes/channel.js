module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var Channel = require('../models/channel');

  router.get('/', function(req, res, next){
    Channel.find({}).exec(function(err, channels){
      if(err) res.send(err);
      res.json(channels);
    });
  });

  return router;

})();
