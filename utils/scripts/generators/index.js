const componentGenerator = require('./component/index.js')
const containerGenerator = require('./container/index.js')
const storeGenerator = require('./store/index.js')

module.exports = function(plop) {
  // see: https://github.com/amwmedia/plop/issues/116
  plop.setHelper('preCurly', t => `{${t}`)
  plop.setHelper('afterCurly', t => `${t}}`)

  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('store', storeGenerator)
  // TODO: pages, stores ..
}
