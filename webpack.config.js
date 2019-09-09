const HtmlWebPackPlugin = require('html-webpack-plugin'),
MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const rootPath = 'src';
const buidPath = 'dist';
const applicationPath = path.resolve(__dirname, rootPath);
module.exports = {
    entry: [ applicationPath + '/app.js', applicationPath + '/app.scss'],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, buidPath) 
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
                test: /\.html$/
                ,exclude: /node_modules/
                ,use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i
                ,use: [
                    process.env.NODE_ENV !== 'production'? "style-loader" : MiniCssExtractPlugin.loader
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
            filename: 'style.css',
            chunkFilename: '[id].css',
          })
    ],
    devServer: {
        compress: true
        ,hot: true
    }
};
