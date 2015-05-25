module.exports = (function(){
  'use strict';

  // Requirements
  var mongoose = require('mongoose');
  var config = require('../config');
  var Schema = mongoose.Schema;
  var User = require('./user');

  // Setting up the Schema
  var MessageSchema = new Schema({
    content: String,
    sender: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    date: { type: Date, default: Date.now }
  });

  // Adding methods
  MessageSchema.methods.getSenderName = function(){
    return this.sender ? this.sender.username : null;
  };

  // Creating model
  var Message = mongoose.model('Message', MessageSchema);

  // Returning the final object
  return Message;
})();
