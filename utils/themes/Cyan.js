/*
 * a theme inspired by rethinkdb: https://rethinkdb.com/
*/

import { lighten, darken } from 'polished'

const primaryColor = '#5EABB3'
const topHalfBg = '#DAE6E5' // header, banner ...
const secondHalfBg = '#f9fcfc' // main content
const mainBg = '#E4EEED'

const fontColor = primaryColor
const sidebarBg = '#1C4752'

const Cyan = {
  font: fontColor,
  link: 'orange',
  main: '#7DC0C5',
  body_bg: mainBg,
  selection_bg: 'tomato',
  header: {
    fg: primaryColor,
    bg: topHalfBg,
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
  },
  banner: {
    fg: primaryColor,
    bg: topHalfBg,
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
  },
  content: {
    bg: secondHalfBg,
  },
  sidebar: {
    bg: sidebarBg,
    pin_active: primaryColor,
    menu_link: '#D9E6E5',
    border_color: '#14363E',
  },
  preview: {
    font: primaryColor,
    bg: mainBg,
    shadow: '-5px 0px 14px 0px rgba(189,189,189,0.37)',
  },
  shell: {
    link: lighten(0.3, primaryColor),
    search_input: lighten(0.3, primaryColor),
    search_icon: lighten(0.3, primaryColor),
    bar_bg: darken(0.03, primaryColor),
    border: darken(0.05, primaryColor),
    title: lighten(0.3, topHalfBg),
    desc: lighten(0.2, primaryColor),
    active_bg: darken(0.1, primaryColor),
  },
  button: {
    primary: primaryColor,
    fg: lighten(0.4, primaryColor),
    hoverBg: lighten(0.1, primaryColor),
    activeBg: darken(0.01, primaryColor),
    clicked: `0px solid ${primaryColor}`,
  },
  taber: {
    activeText: primaryColor,
    normalText: lighten(0.1, primaryColor),
    bottom_bar: primaryColor,
    baseline: `1px solid ${topHalfBg}`,
  },
  navigator: {
    activeBottom: `1.1px solid ${primaryColor}`,
    borderRight: `1px solid ${darken(0.05, topHalfBg)}`,
    hoverBg: '#eee',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Cyan
