var webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/prod/js/',
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
