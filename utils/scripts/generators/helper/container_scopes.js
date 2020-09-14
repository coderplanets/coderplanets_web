/**
 * containerScopes
 *
 * list current lowercase dir in containers dir
 */

const fs = require('fs')
const path = require('path')

const containers = fs.readdirSync(
  path.join(__dirname, '../../../../src/containers'),
)
// const appPages = fs.readdirSync(path.join(__dirname, '../../../src/pages'))
// const containers = appComponents.concat(appPages)

const containerScopes = () => {
  const scopes = containers.filter((v) => v === v.toLowerCase())
  return scopes
}

module.exports = containerScopes
