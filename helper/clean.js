const shell = require('shelljs')
const addCheckMark = require('./utils/checkmark.js')

process.stdout.write('Cleanup js file compiled by Typescript')

shell.rm('-rf', 'components/**/*.js')
shell.rm('-rf', 'pages/**/*.js')
shell.rm('-rf', 'stores/**/*.js')

if (shell.test('-e', 'bin/')) {
  shell.rm('-rf', 'bin/*')
}

addCheckMark()
shell.echo('\n')
