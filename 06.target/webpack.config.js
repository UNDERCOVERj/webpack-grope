const path = require('path');
// 或者webpack --config webpack.config.js
// npx webpack --config webpack.config.js

var nodeConfig = {
    target: 'node',
    // mode: 'development', // 产出不被压缩
    mode: 'production',
    // devtool: "inline-source-map",
    entry: {
        main: './src/app.js'
    },
    // watch: true, 缓存：继续监听，有改变直接重重新build
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // main依赖search，app和search独立，则search内容改变，main的chunkhash也会改变
        // 取8位chunkhash:8
        filename: '[name].[chunkhash:8].js',
    }
};
var webConfig = {
    target: 'web',
    // mode: 'development', // 产出不被压缩
    mode: 'production',
    // devtool: "inline-source-map",
    entry: {
        main: './src/app.js'
    },
    // watch: true, 缓存：继续监听，有改变直接重重新build
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // main依赖search，app和search独立，则search内容改变，main的chunkhash也会改变
        // 取8位chunkhash:8
        filename: '[name].[chunkhash:8].js',
    }

}

module.exports = [nodeConfig, webConfig];