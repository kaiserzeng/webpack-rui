/*
 * @Author: zengrui
 * @Date: 2020-03-26 18:28:29
 * @LastEditors: zengrui
 * @LastEditTime: 2020-06-08 15:22:01
 * @Description: 模块备注
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const isDev = process.env.NODE_ENV === "development";
const config = require("./src/templates/config")[isDev ? "dev" : "build"];
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.jsx", // 默认单个配置

  // entry: ["./src/polyfills.js", "./src/index.js"], // 配置多个主入口，多个依赖一起注入, 可以引入一些简单的，需要提前加载的组件
  output: {
    path: path.resolve(__dirname, "dist"), // 必须是绝对路径
    filename: "bundle.[hash:6].js", // hash 太长，可以使用：6 短一点
    // publicPath: '/' //通常是CDN地址 例如：你打包部署再https://AA/BB/youProject/xxx, 这里的publicPath 就可以配置为/AA/BB/， 开发环境不需要，so 可以做isDev 区分
  },
  devtool: "cheap-module-eval-source-map", //开发环境下使用
  resolve: { extensions: [".js", ".jsx", ".json"] },
  devServer: {
    port: "3000", // 默认是8080
    quiet: false, // 默认不启用
    inline: true, // 默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", // 终端仅打印 error
    overlay: false, // 默认不启用
    clientLogLevel: "silent", // 日志等级
    compress: true, // 是否启用 gzip 压缩
    hot: true, // 热加载
    historyApiFallback: true,
    host: "0.0.0.0",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [
                  require("autoprefixer")({
                    overrideBrowserslist: [">0.25%", "not dead"],
                  }),
                ];
              },
            },
          },
          "less-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240, //10K, 小于10K 转成base64 超过10k 将图片拷贝到dist文件夹下面
              esModule: false,
              name: "[name]_[hash:6].[ext]",
              outputPath: "assets",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      filename: "index.html", // 打包后的文件名
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
      config: config.template,
    }),
    new CleanWebpackPlugin(), // 清理每次打包前，outPutPath下的文件，不需要传参 cleanOnceBeforeBuildPatterns:['**/*', '!dll', '!dll/**']通过它设置不清空目录
    new CopyWebpackPlugin(
      [
        // 拷贝本地的静态文件
        {
          from: "public/js/*.js",
          to: path.resolve(__dirname, "dist", "js"),
          flatten: true,
        },
      ],
      {
        ignore: ["other.js"], // 忽略某文件
      }
    ),
    new webpack.HotModuleReplacementPlugin(), // 热加载
  ],
};
