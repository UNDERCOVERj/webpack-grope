const express = require('express');const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
// const app = express();
const config = require('../webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};
webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

// server.get('/app', (req, res) => {
//     res.end(JSON.stringify({a: '1'}))
// })
server.listen(8080);