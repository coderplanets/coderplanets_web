/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { lighten, darken } from 'polished'

const fontColor = '#657b83'
const sidebarBg = '#4B3A4C'
const mainBg = '#F9F9F9'

const Slack = {
  font: fontColor,
  link: '#36AEE5',
  main: '#7DC0C5',
  body_bg: mainBg,
  selection_bg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#4B968C',
    menu_link: '#A99BA9',
    border_color: darken(0.1, sidebarBg),
  },
  u_panel: {
    link: lighten(0.3, sidebarBg),
    search_input: lighten(0.3, fontColor),
    search_icon: lighten(0.3, fontColor),
    bar_bg: lighten(0.03, sidebarBg),
    border: darken(0.05, fontColor),
    text: lighten(0.15, sidebarBg),
  },
}

export default Slack
