module.exports = (function(){
  'use strict';

  // Requirements
  var mongoose = require('mongoose');
  var config = require('../config');
  var Schema = mongoose.Schema;

  // Setting up the Schema
  var MessageSchema = new Schema({
    content: String,
    date: { type: Date, default: Date.now }
  });

  // Adding methods
  MessageSchema.methods.QQ = function(){
    return this.content || 'QQ';
  };

  // Creating model
  var Message = mongoose.model('Message', MessageSchema);

  // Returning the final object
  return Message;
})();
