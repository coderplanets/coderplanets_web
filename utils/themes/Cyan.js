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

const markdownFont = '#839496'

const Cyan = {
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
    desc: '#a3bbbd',
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
    number_desc: '#a3bbbd',
    number: '#5c868b',
    number_divider: '1px solid #ccdcde',
    number_hover_bg: '#e4ecec',
  },
  paper: {
    bg: secondHalfBg,
    filter_result_hint: '#edc48a',
    article_title: '#61868c',
    article_hover: '#f3f6f9',
    article_brief: '#849ca0',
  },
  pagination: {
    item_bg: '#cbe7ea',
    item_border_color: '#cbe7ea',
    disable_text: '#BCD9DC',
    text: '#6d7f7b',
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
  markdown: {
    title: primaryColor,
    fg: markdownFont,
    titleBottom: `1px solid ${lighten(0.3, primaryColor)}`,
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: 'orange',
    tableBg: darken(0.01, secondHalfBg),
    tableBg2n: darken(0.05, secondHalfBg),
    tableborder: `1px solid ${darken(0.1, secondHalfBg)}`,
    taskDone: '#528416',
    taskPeding: darken(0.1, secondHalfBg),
  },
  code: {
    bg: darken(0.05, secondHalfBg),
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
