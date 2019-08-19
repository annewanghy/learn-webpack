module.exports = {
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    if (!options.isServer) {
      const cacheGroups = config.optimization.splitChunks.cacheGroups;

      delete cacheGroups.react;

      cacheGroups.default = false;

      cacheGroups.vendors = {
        name: "vendors",
        test: /[\\/](node_modules|packages)[\\/]/,
        enforce: true,
        priority: 20
      };

      cacheGroups.commons = {
        name: "commons",
        minChunks: 3,
        priority: 10
      };
    }
    return config;
  }
};
