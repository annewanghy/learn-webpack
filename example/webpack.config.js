const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [new BundleAnalyzerPlugin()],
  output: {
    publicPath: "https://annewanghy.github.io/swiper/"
  },
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
            loader: "style-loader"
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
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  }
};
