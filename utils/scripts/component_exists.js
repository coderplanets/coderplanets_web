/**
 * componentExists
 *
 * Check whether the given component exist in either the components or pages directory
 */

const fs = require('fs')
const path = require('path')

const appComponents = fs.readdirSync(
  path.join(__dirname, '../../src/components')
)
const appPages = fs.readdirSync(path.join(__dirname, '../../pages'))
const components = appComponents.concat(appPages)

function componentExists(comp) {
  return components.indexOf(comp) >= 0
}

module.exports = componentExists
