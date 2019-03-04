'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const config = Object.assign({}, webpackConfig, {
    mode: 'development',
    devtool: 'source-map',

    devServer: {
        contentBase: './../dist'
    }
});

const compiler = Webpack(config);

const devServerOptions = Object.assign({}, config.devServer || {}, {
    stats: {
        colors: true,
        assets: false,
        chunks: false,
        hash: false,
        performance: false,
        version: false,
        timings: false,
        reasons: false,
        moduleTrace: false,
        modules: false,
        entrypoints: false
    },
});

new WebpackDevServer(compiler, devServerOptions).listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080/');
});