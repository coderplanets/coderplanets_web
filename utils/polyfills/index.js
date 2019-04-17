/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below

/* eslint-disable */
import includes from 'core-js/stable/string/includes'
import repeat from 'core-js/stable/string/repeat'
import assign from 'core-js/stable/object/assign'
/* eslint-enable */

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
String.prototype.includes = includes
String.prototype.repeat = repeat
Object.assign = assign
