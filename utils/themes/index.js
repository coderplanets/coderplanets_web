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

export const globalThemes = {
  default: { ...SolarizedDark },
  cyan: { ...Cyan },
  // solarizedDark: { ...SolarizedDark },
  muzli: { ...Muzli },
  yellow: { ...Yellow },
  // purpleDark: {...PurpleDark},
  // solarizedDark: {...SolarizedDark},
  // solarizedLight: {...SolarizedLight},
  slack: { ...Slack },
  brown: { ...Brown },
  cyanGreen: { ...CyanGreen },
}

export const themeNames = R.keys(globalThemes)

// const getBodyBg = R.compose(R.head, R.path(['sidebar', 'bg']))
export const selectorColors = R.map(R.path(['sidebar', 'bg']), globalThemes)
