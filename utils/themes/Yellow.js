/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { darken } from 'polished'

const fronColor = '#657b83'
const sidebarBg = '#EEE8D5'

const Yellow = {
  font: fronColor,
  link: '#4E9ED3',
  main: '#7DC0C5',
  body_bg: '#FDF6E3',
  selection_bg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#2AA198',
    menu_link: '#000',
    border_color: darken(0.1, sidebarBg),
  },
}

export default Yellow
