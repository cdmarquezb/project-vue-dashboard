const { VueLoaderPlugin } = require("vue-loader");
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"],
    modules: [path.resolve(__dirname, "../src"), "../node_modules"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      process: "process/browser"
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg?e|gif|woff|svg|ttf|eot)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
