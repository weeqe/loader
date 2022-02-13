const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app[hash:16].js'
    },
    resolveLoader: {
        alias: {
            'tpl-loader': path.resolve(__dirname, 'loaders/tpl-loader'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'tpl-loader',
                        options: {
                            log: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        port: 3333
    }
}