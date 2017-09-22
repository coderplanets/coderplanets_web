/*
 * a theme inspired by stackedit: https://dribbble.com/shots/2478998-Forum-Concept
 */

import { darken } from 'polished'

const fronColor = '#FBF9FC'
const sidebarBg = '#53B5B0'

const CyanGreen = {
  font: fronColor,
  link: '#99CFAF',
  main: '#7DC0C5',
  body_bg: '#60848B',
  selection_bg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#B1EFBD',
    menu_link: '#CAE5E5',
    border_color: darken(0.1, sidebarBg),
  },
}

export default CyanGreen
