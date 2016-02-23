"use strict";

module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: "./scripts/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    }
};