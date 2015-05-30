module.exports = (function(){
  'use strict';

  var express = require('express');
  var path = require('path');
  var app = express();
  var http = require('http').Server(app);
  var swig = require('swig');
  var waterline = require('waterline')();
  var config = require('./config');

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
  // Swig will cache templates for you, but you can disable
  // that and use Express's caching instead, if you like:
  app.set('view cache', false);
  // To disable Swig's cache, do the following:
  swig.setDefaults({ cache: false });
  // NOTE: You should always cache templates in a production environment.
  // Don't leave both of these to `false` in production!

  // Setting up routes
  app.use('/channels', channels);
  app.use('/', routes);
  app.use('/messages', messages);
  app.use('/users', users);

  // Setting up static
  app.use('/static', express.static('public'));

  // Setting up database
  waterline.initialize(config, function(err, models) {
    if(err) throw err;
  });

  // End og the script
  return app;

})();
