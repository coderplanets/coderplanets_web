/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { darken } from 'polished'

const fronColor = '#657b83'
const sidebarBg = '#4B3A4C'

const Slack = {
  font: fronColor,
  link: '#36AEE5',
  main: '#7DC0C5',
  body_bg: '#F9F9F9',
  selection_bg: '#FDDBA8',
  sidebar: {
    bg: sidebarBg,
    pin_active: '#4B968C',
    menu_link: '#A99BA9',
    border_color: darken(0.1, sidebarBg),
  },
}

export default Slack
