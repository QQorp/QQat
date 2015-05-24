module.exports = (function(){
  'use strict';

  var mongoose = require('mongoose');
  var config = require('../config');
  var Schema = mongoose.Schema;

  var Message = mongoose.model('Message', new Schema({
    content: String
  }));

  return Message;
})();
