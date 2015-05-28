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
    cryptojs: 'crypto-js/core'
  }
});

requirejs(['jquery', 'bootstrap', 'react', 'cryptojs'], function($, Bootstrap, React, CryptoJS) {
  // GET /users
  $.ajax({
    method: "GET",
    url: "/users"
  })
  .done(function(users) {
    console.log(users);
  });

  // GET /messages
  $.ajax({
    method: "GET",
    url: "/messages"
  })
  .done(function(messages) {
    console.log(messages);
  });

  // GET /channels
  $.ajax({
    method: "GET",
    url: "/channels"
  })
  .done(function(channels) {
    console.log(channels);
  });
});
