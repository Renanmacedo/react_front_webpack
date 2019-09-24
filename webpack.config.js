const HtmlWebPackPlugin = require('html-webpack-plugin'),
MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const rootPath = 'src';
const buildPath = 'dist';
const applicationPath = path.resolve(__dirname, rootPath);
module.exports = {
    entry: [ applicationPath + '/app.js', applicationPath + '/style.scss'],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, buildPath) 
        ,filename: '[hash].bundle.js'
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
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
                ,options: {}
            },
            {
                test: /\.html$/
                ,exclude: /node_modules/
                ,use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i
                ,use: [
                    "style-loader"
                    ,MiniCssExtractPlugin.loader
                    ,"css-loader"
                    ,"sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:  path.resolve(__dirname, 'src') + '/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[hash].style.css',
            chunkFilename: '[hash].style.css',
          })
    ],
    devServer: {
        compress: true
        ,hot: true
    }
};
