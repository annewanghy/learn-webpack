const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: "force-strict-loader",
          options: {
            sourceMap: true
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "production"
            }
          },
          {
            loader: "css-loader" // translates CSS into CommonJS,
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  }
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         // cacheGroupKey here is `commons` as the key of the cacheGroup
  //         name(module, chunks, cacheGroupKey) {
  //           const moduleFileName = module
  //             .identifier()
  //             .split("/")
  //             .reduceRight(item => item);
  //           const allChunksNames = chunks.map(item => item.name).join("~");
  //           return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
  //         },
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
};
