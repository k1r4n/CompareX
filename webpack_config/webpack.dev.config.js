/* eslint-disable react/display-name */
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const staticPath = path.resolve(__dirname, '../static');
const srcPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');

module.exports = () => {
  return {
    mode: 'development',
    target: 'web',
    entry: path.resolve(srcPath, 'index.jsx'),
    output: {
      path: distPath,
      filename: 'js/[name].[contenthash].js',
      publicPath: '/',
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['*', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [{
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {importLoaders: 1},
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]',
              },
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }],
    },
    devtool: 'source-map',
    devServer: {
      static: path.join(__dirname, distPath),
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 7000,
      allowedHosts: 'all',
    },
    plugins: [
      new ESLintPlugin(),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `${staticPath}/index.html`,
        title: 'CompareX',
      }),
    ],
  };
};
