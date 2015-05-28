module.exports = (function(){
  'use strict';

  var express = require('express');
  var router = express.Router();

  var Channel = require('../models/channel');

  var fake_channels = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'}
  ];

  router.get('/', function(req, res, next){
    res.json(fake_channels);
    next();
  });

  router.get('/:id', function(req, res, next){
    if(req.params.id > 0 && req.params.id < 4){
      res.json(fake_channels[req.params.id]);
    }else{
      throw "Bad id";
    }
    next();
  });

  return router;

})();
