/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { lighten, darken } from 'polished'

const fontColor = '#787561'
const sidebarBg = '#272422'
const mainBg = '#7DC0C5'

const Slack = {
  font: fontColor,
  link: '#D57041',
  main: mainBg,
  body_bg: '#322D28',
  selection_bg: '#463f37', // not working
  sidebar: {
    bg: sidebarBg,
    pin_active: '#FFC04D',
    menu_link: '#B1A89D',
    border_color: darken(0.1, sidebarBg),
  },
  shell: {
    link: lighten(0.2, fontColor),
    search_input: lighten(0.1, fontColor),
    search_icon: lighten(0.1, fontColor),
    bar_bg: darken(0.03, sidebarBg),
    border: lighten(0.08, sidebarBg),
    text: darken(0.1, fontColor),
    active_bg: darken(0.1, fontColor),
  },
  preview: {
    font: fontColor,
    bg: mainBg,
  },
}

export default Slack
