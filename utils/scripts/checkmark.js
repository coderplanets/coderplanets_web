const chalk = require('chalk')

/**
 * Adds mark check symbol
 */
const addCheckMark = callback => {
  process.stdout.write(chalk.green(' ✓'))
  if (callback) callback()
}

module.exports = addCheckMark
