/**
 * Container Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../helper/component_exists')
const containerScopes = require('../helper/container_scopes')

const TARGET_DIR = '../../../src/containers'
const STORE_TARGET_DIR = '../../../src/stores'

const scopes = containerScopes()

module.exports = {
  description: 'Add a container with scope',
  prompts: [
    {
      type: 'list',
      name: 'scope',
      message: '[命名空间] what scope of this container?',
      choices: scopes,
    },
    {
      type: 'input',
      name: 'name',
      message: '[名称] What should it be called?',
      default: 'Oven',
      validate: (value) => {
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
      message: '[是否需要 GraphQL schema] Do you want network GraphQL schema?',
    },
    {
      type: 'confirm',
      name: 'wantI18n',
      default: false,
      message: '[是否需要国际化] Do you want i18n messages?',
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/index.js`,
        // templateFile: './container/class.js.hbs',
        templateFile: './container/hooks.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/logic.js`,
        templateFile: './container/logic.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/store.js`,
        templateFile: './container/store.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/styles/index.js`,
        templateFile: './container/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/tests/index.test.js`,
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/tests/store.test.js`,
        templateFile: './container/store.test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `${STORE_TARGET_DIR}/index.js`,
        pattern: /(\/\/ GEN: EXPORT CONTAINERS STORE HERE)/g,
        template: `export {{preCurly ""}} default as {{ properCase name}}Store {{afterCurly ""}} from '@/containers/${data.scope}/{{properCase name}}/store'`,
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
          '    {{ camelCase name}}: T.optional({{properCase name}}Store, {{preCurly ""}}{{afterCurly ""}}),',
      },
    ]

    if (data.wantSchema) {
      actions.push({
        type: 'add',
        path: `${TARGET_DIR}/${data.scope}/{{properCase name}}/schema.js`,
        templateFile: './container/schema.js.hbs',
        abortOnFail: true,
      })
    }

    return actions
  },
}
