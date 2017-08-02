var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, '../resources/static/dist/');

var config = {
    entry: './App.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};

module.exports = config;