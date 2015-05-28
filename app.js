module.exports = (function(){
  'use strict';

  var express = require('express');
  var path = require('path');
  var app = express();
  var http = require('http').Server(app);
  var swig = require('swig');

  var channels = require('./routes/channels');
  var routes = require('./routes/index');
  var messages = require('./routes/messages');
  var users = require('./routes/users');

  // Setting up logging system
  var logger = require('morgan');
  app.use(logger('dev'));

  // Setting up views
  app.set('views', path.join(__dirname, 'views'));
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');

  // Setting up routes
  app.use('/channels', channels);
  app.use('/', routes);
  app.use('/messages', messages);
  app.use('/users', users);

  // Setting up static
  app.use('/static', express.static('public'));

  // Setting up database
  var config = require('./config');
  var mongoose = require('mongoose');
  mongoose.connect(config.db.development, function (err) {
    if (err) {
      throw err;
    }
  });

  // End og the script
  return app;

})();
