const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')
const rootPath = 'src';
const buidPath = 'dist';
const applicationPath = path.resolve(__dirname, rootPath);
module.exports = {
    entry: [ applicationPath + '/app.js', applicationPath + '/app.scss'],
    devtool: 'source-map',
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
            },
            {
                test: /\.s[ac]ss$/i
                ,use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:  path.resolve(__dirname, 'src') + '/index.html'
        })
    ],
    devServer: {
        compress: true
        ,hot: true
    }
};
