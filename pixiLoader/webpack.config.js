// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new MiniCssExtractPlugin(),

        new CleanWebpackPlugin(),

        new CopyPlugin({
            patterns: [
              { from: "./assets", to: "assets" },
            ],
          }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
        config.output.filename = "index.[contenthash].js";
        config.optimization = {
          minimize: true,
        };
      } else {
        config.mode = "development";
        config.devtool = "inline-source-map";
        config.output.filename = "index.js";
      }
    return config;
};
