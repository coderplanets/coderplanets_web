const componentGenerator = require('./component/index.js')

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator)
  // TODO: pages, stores ..
}
