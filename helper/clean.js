require('shelljs/global')
const addCheckMark = require('./utils/checkmark.js')

process.stdout.write('Cleanup js file compiled by Typescript')

rm('-rf', 'components/**/*.js')
rm('-rf', 'pages/**/*.js')
rm('-rf', 'stores/**/*.js')

if (test('-e', 'bin/')) {
  rm('-rf', 'bin/*')
}

addCheckMark()
echo('\n')
