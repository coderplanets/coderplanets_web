/*
 * a theme inspired by Muzli && unbuntu
 */
import { lighten, darken } from 'polished'

const primaryColor = '#615c79'
const topHalfBg = '#302D3A' // header, banner ...
const secondHalfBg = '#232029' // main content
const mainBg = '#222029'

const fontColor = '#BDBDBF'
const sidebarBg = '#222029'
const markdownFont = '#839496'

const Muzli = {
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
  link: '#B762B7',
  main: '#B0AEB3',
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
    link: lighten(0.25, mainBg),
    search_input: lighten(0.1, mainBg),
    search_icon: lighten(0.1, mainBg),
    bar_bg: darken(0.03, mainBg),
    border: lighten(0.05, mainBg),
    title: lighten(0.4, mainBg),
    desc: lighten(0.2, mainBg),
    active_bg: lighten(0.1, mainBg),
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

export default Muzli
