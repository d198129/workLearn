const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        login: './src/login.js',
        main: './src/login.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'main.html',
            chunks: '[main]'
        })
    ]
}