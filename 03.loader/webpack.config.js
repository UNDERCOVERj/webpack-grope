const path = require('path');
// 或者webpack --config webpack.config.js
// npx webpack --config webpack.config.js

module.exports = {
    // mode: 'development', // 产出不被压缩
    mode: 'development',
    // devtool: "inline-source-map",
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // main依赖search，app和search独立，则search内容改变，main的chunkhash也会改变
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader'
            },
            {
                test: /.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
}