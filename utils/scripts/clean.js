/* eslint-disable */
const shell = require('shelljs')
const addCheckMark = require('./checkmark.js')

// shell.rm('-rf', 'components/**/*.js')
// shell.rm('-rf', 'pages/**/*.js')
// see README / issue
// shell.rm('-rf', 'stores/**/*.js')

process.stdout.write('clean up the bin/')
if (shell.test('-e', 'bin/')) {
  shell.rm('-rf', 'bin/*')
}

addCheckMark()
shell.echo('\n')
