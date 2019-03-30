const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: '../src/serverRenderer',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'css-loader',
                options: { exportOnlyLocals: true }
            }]
        }]
    }
});
