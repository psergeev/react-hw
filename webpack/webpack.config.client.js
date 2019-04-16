const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

module.exports = merge(webpackConfig, {
    name: 'client',
    target: 'web',
    mode: 'development',
    devtool: 'source-map',

    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers: ['ie >= 11', 'last 4 version'],
                            grid: 'autoplace'
                        })
                    ],
                    sourceMap: true
                }
            }, 'sass-loader']
        }]
    }
});
