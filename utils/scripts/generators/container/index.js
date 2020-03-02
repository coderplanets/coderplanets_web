/**
 * Container Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../../component_exists.js')

const TARGET_DIR = '../../../src/containers'
const STORE_TARGET_DIR = '../../../src/stores'

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
      name: 'wantService',
      default: true,
      message: 'Do you want network service?',
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
        path: `${TARGET_DIR}/{{properCase name}}/index.js`,
        // templateFile: './container/class.js.hbs',
        templateFile: './container/hooks.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/logic.js`,
        templateFile: './container/logic.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/store.js`,
        templateFile: './container/store.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/styles/index.js`,
        templateFile: './container/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/tests/index.test.js`,
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/tests/store.test.js`,
        templateFile: './container/store.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `${STORE_TARGET_DIR}/index.js`,
        pattern: /(\/\/ GEN: EXPORT CONTAINERS STORE HERE)/g,
        template:
          'export {{preCurly ""}} default as {{ properCase name}}Store {{afterCurly ""}} from "@containers/{{properCase name}}/store"',
      },
      {
        type: 'append',
        path: `${STORE_TARGET_DIR}/RootStore/index.js`,
        pattern: /(\/\/ GEN: IMPORT SUBSTORE)/g,
        template: '  {{properCase name}}Store,',
      },
      {
        type: 'append',
        path: `${STORE_TARGET_DIR}/RootStore/index.js`,
        pattern: /(\/\/ GEN: PLUG SUBSTORE TO ROOTSTORE)/g,
        template:
          '    {{ camelCase name}}: t.optional({{properCase name}}Store, {{preCurly ""}}{{afterCurly ""}}),',
      },
    ]

    if (data.wantService) {
      actions.push({
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/service.js`,
        templateFile: './container/service.js.hbs',
        abortOnFail: true,
      })
    }

    // If they want a i18n messages file
    if (data.wantI18n) {
      actions.push({
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/lang.js`,
        templateFile: './container/lang.js.hbs',
        abortOnFail: true,
      })
    }

    return actions
  },
}
