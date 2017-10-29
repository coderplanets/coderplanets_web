/*
 * a theme inspired by Muzli && unbuntu
 */
import { lighten, darken } from 'polished'

const fontColor = '#BDBDBF'
const mainBg = '#222029'

const Muzli = {
  font: fontColor,
  link: '#B762B7',
  main: '#B0AEB3',
  body_bg: mainBg,
  selection_bg: 'tomato',
  sidebar: {
    bg: '#222029',
    pin_active: 'tomato',
    menu_link: 'lightgrey',
    border_color: '#100F13',
  },
  shell: {
    link: lighten(0.25, mainBg),
    search_input: lighten(0.1, mainBg),
    search_icon: lighten(0.1, mainBg),
    bar_bg: darken(0.03, mainBg),
    border: lighten(0.05, mainBg),
    text: lighten(0.1, mainBg),
    active_bg: lighten(0.1, mainBg),
  },
  preview: {
    font: fontColor,
    bg: lighten(0.1, mainBg),
  },
}

export default Muzli
