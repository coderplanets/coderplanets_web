/* eslint-disable */
const shell = require('shelljs')
const addCheckMark = require('./checkmark.js')

// shell.rm('-rf', 'components/**/*.js')
// shell.rm('-rf', 'pages/**/*.js')
// see README / issue
// shell.rm('-rf', 'stores/**/*.js')

// process.stdout.write('clean up the lang/.messages')
// shell.rm('-rf', 'lang/.messages/*')

process.stdout.write('cp locale files to static/locales/')

shell.cp('./lang/*.json', './static/locales')

addCheckMark()
shell.echo('\n')
