const blacklist = require('metro').createBlacklist

module.exports = {
  getTransformModulePath() {
    return require.resolve('./vueTransformerPlugin.js')
  },
  getSourceExts() {
    return ['vue']
  },
  getBlacklistRE() {
    return blacklist([])
  },
}
