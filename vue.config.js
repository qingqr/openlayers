const DevServerConfig = require("./config/dev.config.server")
const ConfigureWebpack = require("./config/configure.webpack")
const ChainWebpackConfig = require("./config/chain.webpack")

module.exports = {
  publicPath: './',
  lintOnSave: false,
  runtimeCompiler: true,
  assetsDir: './static',
  productionSourceMap:false,
  devServer: DevServerConfig,

  configureWebpack: {
    ...ConfigureWebpack
  },

  chainWebpack: (config) => ChainWebpackConfig(config),
}
