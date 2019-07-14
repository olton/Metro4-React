const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

const webpackConfig = {
    entry: "./public/index.js",
    mode: env,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCssAssetsPlugin({})],
        splitChunks: {
            chunks: "all",
            name: true,
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProduction,
                            reloadAll: true
                        },
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: !isProduction ? '[name].css' : '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};

if (env === 'production') {
}

module.exports = webpackConfig;