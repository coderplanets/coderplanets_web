/**
 * containerExists
 *
 * Check whether the given container exist in each containers scope
 */

const fs = require('fs')
const path = require('path')
const containerScopes = require('./container_scopes')

const isContainerExistsInScope = (scope, name) => {
  const containers = fs.readdirSync(
    path.join(__dirname, `../../../../src/containers/${scope}`),
  )

  return containers.includes(name)
}

const containerExists = (name) => {
  const scopes = containerScopes()

  for (let index = 0; index < scopes.length; index += 1) {
    const scope = scopes[index]
    if (isContainerExistsInScope(scope, name)) {
      return true
    }
  }

  return false
}

module.exports = containerExists
