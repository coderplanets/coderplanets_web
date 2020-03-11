const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

/* eslint-disable */
const glob = require('glob')
const addCheckMark = require('./checkmark')

const defaultMessages = glob
  .sync('./lang/.messages/**/*.json')
  .map(filename => readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((messages, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (messages.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }
      messages[id] = defaultMessage
    })
    return messages
  }, {})

writeFileSync('./lang/zh.json', JSON.stringify(defaultMessages, null, 2))
console.log(`> Wrote default messages to: "${resolve('./lang/zh.json')}"`)
addCheckMark()
