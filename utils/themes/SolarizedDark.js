/*
 * a theme inspired by solarized: http://ethanschoonover.com/solarized
*/
// some selection color not supported
import { lighten, darken } from 'polished'

const primaryColor = '#2d7eb1'
const subPrimaryColor = '#014354' // header, banner ...
const mainBg = '#002A35'

const fontColor = primaryColor
const sidebarBg = '#001B21'

const SolarizedDark = {
  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  body_bg: mainBg,
  selection_bg: '#839496',
  header: {
    fg: primaryColor,
    bg: subPrimaryColor,
    spliter: `1px solid ${darken(0.04, subPrimaryColor)}`,
  },
  button: {
    primary: primaryColor,
    fg: lighten(0.4, primaryColor),
    hoverBg: lighten(0.1, primaryColor),
    activeBg: darken(0.01, primaryColor),
    clicked: `0px solid ${primaryColor}`,
  },
  preview: {
    font: fontColor,
    bg: mainBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
  },
  taber: {
    activeText: primaryColor,
    normalText: darken(0.05, primaryColor),
    bottom_bar: primaryColor,
    baseline: `1px solid ${subPrimaryColor}`,
  },
  banner: {
    fg: primaryColor,
    bg: subPrimaryColor,
    spliter: `1px solid ${darken(0.04, subPrimaryColor)}`,
  },
  sidebar: {
    bg: sidebarBg,
    pin_active: '#849804',
    menu_link: '#93A1A1',
    border_color: '#14363E',
  },
  shell: {
    link: lighten(0.2, mainBg),
    search_input: lighten(0.1, mainBg),
    search_icon: lighten(0.1, mainBg),
    bar_bg: darken(0.01, mainBg),
    border: lighten(0.05, mainBg),
    text: lighten(0.1, mainBg),
    active_bg: lighten(0.1, mainBg),
  },
}

export default SolarizedDark
