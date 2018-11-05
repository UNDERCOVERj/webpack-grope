const path = require('path');

module.exports = {
    target: 'node',
    entry: ['./src/demo.js', './vendor.js'], // main.bundle.js 多个依赖文件一起注入，并且将它们的依赖导向(graph)到一个“chunk”
    entry: { // main/vendor/demo
        demo: './src/demo.js',
        vendor: './vendor.js'
    },
    // entry: { // main/src
    //     src: './src/demo.js'
    // },
    // Module not found: Error: Can't resolve 'net'
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },{
            test: /.txt$/,
            use: 'raw-loader'
        }]
    }
}