const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: path.join(__dirname, '../src'),
    entry: './index',
    mode: 'production',
    devtool: 'none',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
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
};
