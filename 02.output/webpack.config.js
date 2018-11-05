const path = require('path');
module.exports = {
    // mode: 'production',
    entry: {
        app: './src/app.js',
        search: './src/search.js',
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // main依赖search，app和search独立，则search内容改变，main的chunkhash也会改变
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    }
}