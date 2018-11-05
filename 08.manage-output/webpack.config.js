const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin()
    ]
}