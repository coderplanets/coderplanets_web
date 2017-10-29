/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { darken } from 'polished'

const fontColor = '#657b83'
const sidebarBg = '#EEE8D5'
const mainBg = '#FDF6E3'

const Yellow = {
  font: fontColor,
  link: '#4E9ED3',
  main: '#7DC0C5',
  body_bg: mainBg,
  selection_bg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#2AA198',
    menu_link: '#000',
    border_color: darken(0.1, sidebarBg),
  },
  shell: {
    link: darken(0.45, sidebarBg),
    search_input: darken(0.5, sidebarBg),
    search_icon: darken(0.4, sidebarBg),
    bar_bg: darken(0.15, sidebarBg),
    border: darken(0.3, sidebarBg),
    text: darken(0.35, sidebarBg),
    active_bg: darken(0.1, fontColor),
  },
  drawer: {
    font: fontColor,
    bg: mainBg,
  },
}

export default Yellow
