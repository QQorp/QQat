var webpack = require('webpack');

module.exports = {
    entry: './front-src/js/main.js',
    output: {
        path: __dirname + '/static/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: [ 'jsx-loader?harmony', 'babel'] }
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
