/*
 * a theme inspired by solarized: http://ethanschoonover.com/solarized
*/

// some selection color not supported
import { lighten, darken } from 'polished'

const fontColor = '#839491'
const mainBg = '#002A35'
const buttonBase = '#217FBE'

const SolarizedDark = {
  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  body_bg: mainBg,
  selection_bg: '#839496', // '#657b83',
  sidebar: {
    bg: '#053542',
    pin_active: '#849804',
    menu_link: '#93A1A1',
    border_color: '#14363E',
  },
  u_panel: {
    link: lighten(0.2, mainBg),
    search_input: lighten(0.1, mainBg),
    search_icon: lighten(0.1, mainBg),
    bar_bg: darken(0.03, mainBg),
    border: lighten(0.05, mainBg),
    text: lighten(0.1, mainBg),
    active_bg: lighten(0.1, mainBg),
  },
  drawer: {
    font: fontColor,
    bg: mainBg,
  },
  button: {
    fg: '#F8FCFC',
    bg: buttonBase,
    hover: lighten(0.1, buttonBase),
    focus: buttonBase,
    active: darken(0.05, buttonBase),
    border: buttonBase,
  },
}

export default SolarizedDark
