/**
 * Container Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../../component_exists.js')

module.exports = {
  description: 'Add an connected container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Oven',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: 'wantSchema',
      default: true,
      message: 'Do you want GraphQL schema?',
    },
    {
      type: 'confirm',
      name: 'wantI18n',
      default: false,
      message: 'Do you want i18n messages (i.e. will this container use text)?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/index.js',
        templateFile: './container/class.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/logic.js',
        templateFile: './container/logic.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/store.js',
        templateFile: './container/store.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/styles/index.js',
        templateFile: './container/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../../containers/{{properCase name}}/tests/store.test.js',
        templateFile: './container/store.test.js.hbs',
        abortOnFail: true,
      },
    ]

    if (data.wantSchema) {
      actions.push({
        type: 'add',
        path: '../../../containers/{{properCase name}}/schema.js',
        templateFile: './container/schema.js.hbs',
        abortOnFail: true,
      })
    }

    // If they want a i18n messages file
    if (data.wantI18n) {
      actions.push({
        type: 'add',
        path: '../../../containers/{{properCase name}}/lang.js',
        templateFile: './container/lang.js.hbs',
        abortOnFail: true,
      })
    }

    return actions
  },
}
