const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const config = merge(webpackConfig, {
    mode: 'development',
    devtool: 'source-map',

    devServer: {
        contentBase: './../dist'
    },

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
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            hash: true,
            template: path.resolve(__dirname, '../src/index.html')
        })
    ]
});

const compiler = Webpack(config);

const devServerOptions = merge(config.devServer || {}, {
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
    historyApiFallback: {
        index: 'index.html'
    }
});

new WebpackDevServer(compiler, devServerOptions).listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080/');
});
