const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')
const rootPath = 'src';
const buidPath = 'dist'
module.exports = {
    entry: {
        app: path.resolve(__dirname, rootPath) + '/app.js'
    },
    output: {
        path: path.resolve(__dirname, buidPath) 
        ,filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/
                ,exclude: /node_modules/
                ,use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/
                ,exclude: /node_modules/
                ,use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:  path.resolve(__dirname, 'src') + '/index.html'
        })
    ]
};
