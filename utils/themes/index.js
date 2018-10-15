/*
 * theme desc
 * TODO: add README in this folder to show some snapshot
 * 参考: http://enrmarc.github.io/atom-theme-gallery/
 * slackUI: https://atom.io/themes/slack-ui
 * Github: ...
 * gruvbox: https://atom.io/themes/gruvbox-syntax
 * Spacegray: https://atom.io/themes/spacegray-dark-neue-syntax
 * DuoTone Dark: https://atom.io/themes/duotone-dark-forest-syntax
 * DuoTone Dark2: https://atom.io/themes/duotone-dark-earth-syntax
 * Earthsung https://atom.io/themes/earthsung-by-jackson-syntax
 */

import R from 'ramda'

import Cyan from './Cyan'
import Purple from './Purple'
import SolarizedDark from './SolarizedDark'
import Github from './Github'
import Blue from './Blue'
import Yellow from './Yellow'
import Green from './Green'
import IronGreen from './IronGreen'

export const themeDict = {
  default: { ...Github },
  cyan: { ...Cyan },
  solarized: { ...SolarizedDark },
  purple: { ...Purple },
  yellow: { ...Yellow },
  github: { ...Github },
  blue: { ...Blue },
  green: { ...Green },
  ironGreen: { ...IronGreen },
}

export const themeKeys = R.keys(themeDict)

export const themeDescs = {
  cyan: 'inspired by the rethinkdb.com admin panel',
  default: 'inspired by the rethinkdb.com admin panel',
  solarized: 'inspired by Emacs solarized theme',
  purple: 'inspired ubuntu OS terminal',
  yellow: 'inspired by vimawesome.com',
  github: 'inspired by github.com',
  blue: 'inspired by myself i think ?',
  green: 'inspired by Olive theme from Vivaldi project',
  ironGreen: 'inspired by dribbble: shots/2478998-Forum-Concept',
}

export const themeCoverMap = R.map(R.path(['cover']), themeDict)
export const themeCoverIndexMap = R.map(R.path(['coverIndex']), themeDict)

// shorthand for style-components
export const theme = themepath =>
  R.path(['theme', ...R.split('.', themepath)]) || 'wheat'
