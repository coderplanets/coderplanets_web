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

import {
  Cyan,
  Purple,
  SolarizedDark,
  Github,
  Blue,
  Yellow,
  Green,
  IronGreen,
} from './skins'

export const defaultTheme = 'cyan'
export const themeSkins = {
  cyan: { ...Cyan },
  solarized: { ...SolarizedDark },
  purple: { ...Purple },
  yellow: { ...Yellow },
  github: { ...Github },
  blue: { ...Blue },
  green: { ...Green },
  ironGreen: { ...IronGreen },
}

// cover color of a theme
export const themeCoverMap = R.map(R.path(['cover']), themeSkins)
// the "T" color in themeSelector
export const themeCoverIndexMap = R.map(R.path(['coverIndex']), themeSkins)

// curried shorthand for style-components
export const theme = themepath =>
  R.path(['theme', ...R.split('.', themepath)]) || 'wheat'

export { default as themeMeta } from './theme_meta'
