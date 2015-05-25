module.exports = (function(){
  'use strict';

  // Requirements
  var mongoose = require('mongoose');
  var config = require('../config');
  var Schema = mongoose.Schema;

  // Setting up the Schema
  var ChannelSchema = new Schema({
    label: String
  });

  // Creating model
  var Channel = mongoose.model('Channel', ChannelSchema);

  // Returning the final object
  return Channel;
})();
