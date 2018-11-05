const path = require('path');

module.exports = {
    entry: ['./index.js', './vendor.js'],
    // entry: { main: './index.js', vendor: '..vendor.js' }
    // Module not found: Error: Can't resolve 'net'
    target: 'node',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
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