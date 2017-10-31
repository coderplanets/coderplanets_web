/*
* theme desc
* TODO: add README in this folder to show some snapshot
* 参考: http://enrmarc.github.io/atom-theme-gallery/
* Muzli-light
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
import Muzli from './Muzli'
import SolarizedDark from './SolarizedDark'
import Yellow from './Yellow'
import Slack from './Slack'
import Brown from './Brown'
import CyanGreen from './CyanGreen'

export const themeDict = {
  default: { ...Cyan },
  cyan: { ...Cyan },
  solarized: { ...SolarizedDark },
  muzli: { ...Muzli },
  yellow: { ...Yellow },
  slack: { ...Slack },
  brown: { ...Brown },
  cyan_green: { ...CyanGreen },
}

export const themeKeys = R.keys(themeDict)

export const selectorColors = R.map(R.path(['sidebar', 'bg']), themeDict)
export const themeColorMap = R.map(R.path(['sidebar', 'bg']), themeDict)

// shorthand for style-components
export const theme = R.curry(
  themepath => R.path(['theme', ...R.split('.', themepath)]) || 'wheat'
)
