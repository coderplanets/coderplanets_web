/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { darken } from 'polished'

const fronColor = '#787561'
const sidebarBg = '#272422'

const Slack = {
  font: fronColor,
  link: '#D57041',
  main: '#7DC0C5',
  body_bg: '#322D28',
  selection_bg: '#463f37', // not working
  sidebar: {
    bg: sidebarBg,
    pin_active: '#FFC04D',
    menu_link: '#B1A89D',
    border_color: darken(0.1, sidebarBg),
  },
}

export default Slack
