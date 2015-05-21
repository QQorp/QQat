var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  "use strict";

  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/chat', function (req, res) {
  "use strict";

  res.sendFile(path.join(__dirname+'/views/chat.html'));
});

app.use('/static', express.static('public'));

// SocketIO section
io.on('connection', function(socket){
  "use strict";

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
  });
});

var server = http.listen(3000, function () {
  "use strict";

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
