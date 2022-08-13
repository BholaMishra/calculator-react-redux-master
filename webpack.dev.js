const merge = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        compress: true
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});