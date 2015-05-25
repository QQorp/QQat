module.exports = (function(){
  'use strict';

  // Requirements
  var mongoose = require('mongoose');
  var config = require('../config');
  var Schema = mongoose.Schema;

  // Setting up the Schema
  var UserSchema = new Schema({
    username: String,
    login: String,
    password: String,
    registrationDate: { type: Date, default: Date.now }
  });

  // Creating model
  var User = mongoose.model('User', UserSchema);

  // Returning the final object
  return User;
})();
