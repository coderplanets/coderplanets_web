/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict'

const componentExists = require('../helper/component_exists')

const TARGET_DIR = '../../../src/components'

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless',
      choices: () => ['Stateless', 'React Class'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? `${value} is already exists in 'src/components/${value}'`
            : true
        }

        return 'The name is required'
      },
    },
    {
      type: 'confirm',
      name: 'wantI18n',
      default: false,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantStyle',
      default: true,
      message: 'Does it have styles?',
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate

    switch (data.type) {
      case 'Stateless': {
        componentTemplate = './component/stateless.tsx.hbs'
        break
      }
      default: {
        componentTemplate = './component/class.js.hbs'
      }
    }

    const actions = [
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/index.tsx`,
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/tests/index.test.ts`,
        templateFile: './component/test.ts.hbs',
        abortOnFail: true,
      },
    ]

    if (data.wantStyle) {
      actions.push({
        type: 'add',
        path: `${TARGET_DIR}/{{properCase name}}/styles/index.ts`,
        templateFile: './component/styles.ts.hbs',
        abortOnFail: true,
      })
    }

    return actions
  },
}
