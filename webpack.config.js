var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react", "stage-2"]
                    }
                },
                exclude: /node_modules/,
                include: SRC_DIR,
            }
        ]
    }
};

module.exports = config;
