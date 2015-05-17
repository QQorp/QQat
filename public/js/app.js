console.log("QQat is now running..");

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
  console.log($);
  console.log(Bootstrap);
  console.log(React);
  console.log(CryptoJS);
  console.log(SocketIO);
});
