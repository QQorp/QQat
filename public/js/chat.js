requirejs.config({
  baseUrl: '/static/js/libs',
  paths: {
    // the left side is the module ID,
    // the right side is the path to
    // the jQuery file, relative to baseUrl.
    // Also, the path should NOT include
    // the '.js' file extension. This example
    // is using jQuery 1.9.0 located at
    // js/lib/jquery-1.9.0.js, relative to
    // the HTML page.
    jquery: 'jquery/dist/jquery',
    bootstrap: 'bootstrap-sass-official/assets/javascripts/bootstrap',
    react: 'react/react',
    cryptojs: 'crypto-js/core',
    socketio: 'socket.io-client/socket.io'
  }
});

requirejs(['jquery', 'bootstrap', 'react', 'cryptojs', 'socketio'], function($, Bootstrap, React, CryptoJS, SocketIO) {

  // Putting focus on the input
  $("#chat_input").focus();

  // initializing SocketIO
  var socket = SocketIO();
  // Managing the input to send test through SocketIO
  $('#chat_form').submit(function(){
    socket.emit('chat message', $('#chat_input').val());
    $('#chat_input').val('');
    return false;
  });

  // When we are connected to the server, receiving all previous messages
  socket.on('previous chat messages', function(messages){
    for (var i = 0; i < messages.length; i++) {
      $('#chat_content').append($('<div class="well">').text(messages[i].content));
    }
  });

  // When we receive a message
  socket.on('chat message', function(msg){
    $('#chat_content').append($('<div class="well">').text(msg));
  });

  // If we lose connection with the server
  socket.on('disconnect', function(){
    $('#chat_content').html('');
  });

});
