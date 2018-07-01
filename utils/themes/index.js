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
  default: { ...Cyan },
  /* cyan: { ...Cyan }, */
  solarized: { ...SolarizedDark },
  purple: { ...Purple },
  yellow: { ...Yellow },
  github: { ...Github },
  blue: { ...Blue },
  green: { ...Green },
  ironGreen: { ...IronGreen },
}

export const themeKeys = R.keys(themeDict)

export const themeCoverMap = R.map(R.path(['cover']), themeDict)
export const themeCoverIndexMap = R.map(R.path(['coverIndex']), themeDict)

// shorthand for style-components
export const theme = themepath =>
  R.path(['theme', ...R.split('.', themepath)]) || 'wheat'
