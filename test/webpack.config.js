const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // 会生成：main/vendor/app3个chunk
        filename: '[name].[chunkhash:8].js'
    },
    plugins: [
    //   new HtmlWebpackPlugin({
    //       template: './src/index.html'
    //   })
    ]
}

// 多页程序，使用CommonsChunkPlugin为每个页面创建共享bundle