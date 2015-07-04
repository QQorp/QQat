var webpack = require('webpack');

module.exports = {
  entry: {
    main: './front-src/js/main.js',
    welcome: './front-src/js/welcome.js'
  },
  output: {
    path: __dirname + '/static/js/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    })
  ]
};
