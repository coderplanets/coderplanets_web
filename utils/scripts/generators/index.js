const componentGenerator = require('./component/index.js')
const containerGenerator = require('./container/index.js')
const storeGenerator = require('./store/index.js')

module.exports = function(plop) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('store', storeGenerator)
  // TODO: pages, stores ..
}
