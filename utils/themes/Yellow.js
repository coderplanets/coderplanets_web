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
  bodyBg: mainBg,
  selectionBg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#2AA198',
    menu_link: '#000',
    border_color: darken(0.1, sidebarBg),
  },
  shell: {
    link: darken(0.45, sidebarBg),
    searchInput: darken(0.5, sidebarBg),
    searchIcon: darken(0.4, sidebarBg),
    barBg: darken(0.15, sidebarBg),
    border: darken(0.3, sidebarBg),
    text: darken(0.35, sidebarBg),
    activeBg: darken(0.1, fontColor),
  },
  preview: {
    font: fontColor,
    bg: mainBg,
  },
}

export default Yellow
