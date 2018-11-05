const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: ['./src/a.js', './src/b.js', './src/c.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    // 在生产环境有用
    watch: true,
    // devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}