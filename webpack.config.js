const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        app: "./src/js/index.js"
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader"
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
};