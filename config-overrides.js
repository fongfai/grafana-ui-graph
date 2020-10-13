/* config-overrides.js */
const path = require("path");
const {
  override,
  watchAll,
  fixBabelImports,
  addLessLoader,
  overrideDevServer,
  addWebpackExternals,
} = require("customize-cra");


module.exports = override(
  addWebpackExternals({
    '$': 'jQuery',
    'jquery': 'jQuery'
  })
);
