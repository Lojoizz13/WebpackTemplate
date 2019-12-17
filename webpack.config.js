const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        app: "./index.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./public"),
        publicPath: "/public"
    },

    devServer: {
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: { path: "./postcss.config.js"} }
                    },
                ]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: { path: "./postcss.config.js"} }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};