/*
 * a theme inspired by stackedit: https://dribbble.com/shots/2478998-Forum-Concept
 */

import { darken } from 'polished'

const fontColor = '#dcd9cf'
const sidebarBg = '#53B5B0'
const mainBg = '#60848B'

const CyanGreen = {
  cover: sidebarBg,
  coverIndex: 'orange',
  font: fontColor,
  link: '#99CFAF',
  main: '#7DC0C5',
  bodyBg: mainBg,
  selectionBg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#B1EFBD',
    menu_link: '#CAE5E5',
    border_color: darken(0.1, sidebarBg),
  },
  shell: {
    link: darken(0.25, sidebarBg),
    searchInput: darken(0.2, sidebarBg),
    searchIcon: darken(0.2, sidebarBg),
    barBg: darken(0.01, sidebarBg),
    border: darken(0.1, sidebarBg),
    text: darken(0.15, sidebarBg),
    activeBg: darken(0.1, fontColor),
  },
  preview: {
    font: fontColor,
    bg: mainBg,
  },
}

export default CyanGreen
