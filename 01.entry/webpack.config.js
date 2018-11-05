const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, './path'),
//         filename: 'index.bundle.js'
//     }
// }
// 等同于：

// module.exports = {
//     entry: {
//         main: './src/index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, './path'),
//         filename: '[name].bundle.js' // main
//     }
// }

// 向entry传入一个数组，会将数组文件聚合输出

// 对象语法

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js',
        vendor: './src/b.js',
        c: ['./src/a.js', './src/b.js'],
        // publicPath: '../assets/'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // 会生成：main/vendor/app3个chunk
        filename: '[name].[chunkhash:8].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
    ]
}

// 多页程序，使用CommonsChunkPlugin为每个页面创建共享bundle