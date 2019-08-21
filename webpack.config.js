const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';

const webpackConfig = {
    entry: "./public/index.js",
    mode: env,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProduction ? '[name].bundle.[hash].js' : '[name].js',
        publicPath: '/',
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {mangle: false}
            }),
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
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: !isProduction,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    overrideBrowserslist :['IE 10', 'IE 11', 'last 2 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        writeToDisk: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? '[name].[hash].css' : '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: "public/favicon.ico"
        }),
        new CopyPlugin([
            { from: 'public/images', to: 'images' },
            { from: 'public/data', to: 'data' },
            'public/.htaccess',
        ]),
    ]
};

if (env === 'production') {
}

module.exports = webpackConfig;