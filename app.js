(function(){
  'use strict';

  var config = require('./config');
  var express = require('express');
  var app = express();
  var path = require('path');
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  var mongoose = require('mongoose');
  mongoose.connect(config.db.development, function (err) {
    if (err) {
      throw err;
    }
  });

  var Message = require('./models/message');

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/index.html'));
  });

  app.get('/chat', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/chat.html'));
  });

  app.get('/interface', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/interface.html'));
  });

  app.use('/static', express.static('public'));

  // SocketIO section
  io.on('connection', function(socket){
    Message.find({}, function(err, docs){
      socket.emit('previous chat messages', docs);
    });

    socket.on('chat message', function(msg){
      var m = new Message({ content: msg });
      m.save(function(err){
        if(err){
          throw err;
        }
      });
      io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
      // Does nothing !
    });
  });

  var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });

})();
