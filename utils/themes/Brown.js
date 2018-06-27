/*
 * a theme inspired by stackedit: https://stackedit.io/editor
*/

import { lighten, darken } from 'polished'

const primaryColor = '#807462'
const topHalfBg = '#323440' // header, banner ...
const secondHalfBg = '#282831' // main content

const fontColor = '#9FA0B4'
const sidebarBg = '#272831'
const mainBg = '#7DC0C5'

const markdownFont = '#839496'

const Dark = {
  cover: fontColor,
  coverIndex: 'orange',
  htmlBg: topHalfBg,
  loading: {
    basic: topHalfBg,
    animate: lighten(0.03, topHalfBg),
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, secondHalfBg),
  },
  font: fontColor,
  link: '#D57041',
  main: mainBg,
  bodyBg: secondHalfBg,
  selectionBg: '#463f37', // not working
  header: {
    fg: primaryColor,
    bg: topHalfBg,
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
  },
  banner: {
    fg: primaryColor,
    bg: topHalfBg,
    spliter: `1px solid ${lighten(0.04, topHalfBg)}`,
  },
  content: {
    bg: secondHalfBg,
  },
  sidebar: {
    bg: sidebarBg,
    pin_active: 'tomato',
    menu_link: 'lightgrey',
    border_color: '#100F13',
  },
  preview: {
    font: primaryColor,
    bg: lighten(0.1, mainBg),
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
  },
  markdown: {
    title: fontColor,
    fg: markdownFont,
    titleBottom: `1px solid ${lighten(0.01, primaryColor)}`,
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: 'orange',
    tableBg: lighten(0.01, secondHalfBg),
    tableBg2n: lighten(0.05, secondHalfBg),
    tableborder: `1px solid ${lighten(0.1, secondHalfBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, secondHalfBg),
  },
  code: {
    bg: lighten(0.05, secondHalfBg),
  },
  shell: {
    link: lighten(0.2, fontColor),
    searchInput: lighten(0.1, fontColor),
    searchIcon: lighten(0.1, fontColor),
    barBg: darken(0.03, sidebarBg),
    border: lighten(0.08, sidebarBg),
    title: lighten(0.4, mainBg),
    desc: lighten(0.2, mainBg),
    activeBg: darken(0.1, fontColor),
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
    bottomBar: primaryColor,
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

export default Dark
