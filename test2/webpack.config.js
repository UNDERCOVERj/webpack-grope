const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js'
    },
    devtool: "eval",
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist/js'),
        // 会生成：main/vendor/app3个chunk
        filename: '[name].[chunkhash:8].js',
        library: 'myLib',
        // publicPath: "/assets/", // index.html中前缀
        chunkFilename: '[id].js',
        libraryTarget: 'umd'
    },

    plugins: [
      new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, './dist') + '/index.html',
          template: './index.html'
      })
    ],
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

// 多页程序，使用CommonsChunkPlugin为每个页面创建共享bundle