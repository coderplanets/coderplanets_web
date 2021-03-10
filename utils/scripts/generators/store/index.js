/*
 * Store Generator
 */

/* eslint strict: ["off"] */

'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const componentExists = require('../helper/component_exists')

module.exports = {
  description: 'Add an store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called (end with Store)?',
      default: 'OvenStore',
      validate: (value) => {
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
        path: '../../../stores/{{properCase name}}/index.js',
        templateFile: './store/store.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../stores/{{properCase name}}/test/index.test.js',
        templateFile: './store/store.test.js.hbs',
        abortOnFail: true,
      },
    ]

    return actions
  },
}
