console.log("QQat is now running..");

requirejs.config({
    baseUrl: '/static/js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: '/static/js/libs/jquery/dist/jquery',
        bootstrap: '/static/js/libs/bootstrap-sass-official/assets/javascripts/bootstrap',
        react: '/static/js/libs/react/react'
    }
});

requirejs(['jquery', 'bootstrap', 'react'], function($, Bootstrap, React) {
  console.log($);
  console.log(Bootstrap);
  console.log(React);
});
