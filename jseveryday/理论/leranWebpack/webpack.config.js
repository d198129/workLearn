const path = require('path');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'mian.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
        rule: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')]
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 1024 * 3,
                        outputPath: "image/",
                        publicPath: "/image"
                    }
                }
            }
        ]
    },
    devServe: {
        open: true,
        port: 8080,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}

// postcss-loader使用的postcss的plugins也可以这样配置
// use: ['style-loader', 'css-loader', 'postcss-loader']
// module.exports = {
//     plugins: [require('autoprefixer')]
// }