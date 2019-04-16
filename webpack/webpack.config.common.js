const LoadablePlugin = require('@loadable/webpack-plugin')
const path = require('path');

module.exports = {
    context: path.join(__dirname, '../src'),
    entry: './index',
    mode: 'production',
    devtool: 'none',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    output: {
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    plugins: [new LoadablePlugin()]
};
