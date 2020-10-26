const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const ICON = join(__dirname, 'icon.png');
const webpack = require('webpack');
//模拟不同网速和设备对打包代码对性能进行深度测试
//const Jarvis = require('webpack-jarvis');
module.exports = {
  output: {
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext]',
    filename: 'scripts/[name].bundule.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '../dist'),
    proxy: {
      '/api': 'http://localhost:3000',
    },
    inline: true,
    hot: true,
    quiet: true,
    port: 8082,
    watchContentBase: true,
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new Jarvis({
    //   port: 1337 // optional: set a port
    // }),
    new HtmlWebpackPlugin({
      title: '京程一灯yd-react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/web/index-dev.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8082'],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation',
        ],
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: ICON,
        });
      },
    }),
  ],
};
