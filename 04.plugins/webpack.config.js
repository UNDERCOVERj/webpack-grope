const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 或者webpack --config webpack.config.js
// npx webpack --config webpack.config.js

module.exports = {
    // mode: 'development', // 产出不被压缩
    mode: 'production',
    // devtool: "inline-source-map",
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // main依赖search，app和search独立，则search内容改变，main的chunkhash也会改变
        // 取8位chunkhash:8
        filename: '[name].[chunkhash:8].js',
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(), use config.optimization.minimize
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}