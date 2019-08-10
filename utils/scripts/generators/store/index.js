/*
 * Store Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../../component_exists.js')

module.exports = {
  description: 'Add an store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called (end with Store)?',
      default: 'OvenStore',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A Store with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/stores/{{properCase name}}/index.js',
        templateFile: './store/store.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/stores/{{properCase name}}/test/index.test.js',
        templateFile: './store/store.test.js.hbs',
        abortOnFail: true,
      },
    ]

    return actions
  },
}
