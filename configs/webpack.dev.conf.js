const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",

    devServer: {
        contentBase: baseWebpackConfig.externals.paths.public,
        "overlay": true,
        // port: 8081
    },

    devtool: "cheap-module-eval-source-map",

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
})

module.exports = new Promise(resolve => {
    resolve(devWebpackConfig);
})