const Express = require('express');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackConfig = require('./');
const Webpack = require('webpack');

const app = Express();

const compiler = Webpack(webpackConfig);
app.use(WebpackDevMiddleware(compiler, {
    publicPath: '/dist',
    writeToDisk(filePath) {
        return /loadable-stats/.test(filePath);
    },
}));
app.use(WebpackHotServerMiddleware(compiler));

module.exports = app;

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});
