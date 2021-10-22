/* eslint-disable @typescript-eslint/no-var-requires */

const widgetGenerator = require('./widget/index')
const containerGenerator = require('./container/index')
const storeGenerator = require('./store/index')

module.exports = function generators(plop) {
  // see: https://github.com/amwmedia/plop/issues/116
  plop.setHelper('preCurly', (t) => `{${t}`)
  plop.setHelper('afterCurly', (t) => `${t}}`)

  plop.setGenerator('widget', widgetGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('store', storeGenerator)
  // TODO: pages, stores ..
}
