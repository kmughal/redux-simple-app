var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundles-[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [" ",".js", ".jsx"]
    },
    devtool: "source-map",
    context: __dirname,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "A react redux app",
            filename: "index.html",
            template: "./src/index.html",
            hash: true
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
        ,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};