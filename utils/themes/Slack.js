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
  bodyBg: mainBg,
  selectionBg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#4B968C',
    menu_link: '#A99BA9',
    border_color: darken(0.1, sidebarBg),
  },
  shell: {
    link: lighten(0.3, sidebarBg),
    searchInput: lighten(0.3, fontColor),
    searchIcon: lighten(0.3, fontColor),
    barBg: lighten(0.03, sidebarBg),
    border: darken(0.05, fontColor),
    text: lighten(0.15, sidebarBg),
    activeBg: darken(0.1, sidebarBg),
  },
  preview: {
    font: fontColor,
    bg: mainBg,
  },
}

export default Slack
