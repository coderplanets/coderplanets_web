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

import { keys } from 'ramda'

import Cyan from './Cyan'
import Muzli from './Muzli'
import SolarizedDark from './SolarizedDark'

export const globalThemes = {
  default: { ...SolarizedDark },
  cyan: { ...Cyan },
  solarizedDark: { ...SolarizedDark },
  muzli: { ...Muzli },
  // purpleDark: {...PurpleDark},
  // solarizedDark: {...SolarizedDark},
  // solarizedLight: {...SolarizedLight},
  // slackUI: { ...SlackUI },
}

export const themeNames = keys(globalThemes)
