/*
 * a theme inspired by rethinkdb: https://rethinkdb.com/
 */

import { lighten, darken } from 'polished'

const primaryColor = '#5EABB3'

const bannerBg = '#DAE6E5'
const contentBg = '#E4EEED'

const contentBoxBg = '#f9fcfc'

const fontColor = primaryColor
const sidebarBg = '#1C4752'

const markdownFont = '#839496'

const Cyan = {
  htmlBg: bannerBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: 'orange',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: 'tomato',
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: `1px solid ${darken(0.04, bannerBg)}`,
    fixed: contentBoxBg,
    tabActive: '#61868c', // articleTitle
    tabOthers: lighten(0.1, '#849ca0'), // articleBrief
  },
  banner: {
    fg: primaryColor,
    bg: bannerBg,
    desc: '#a3bbbd',
    spliter: `1px solid ${darken(0.04, bannerBg)}`,
    numberDesc: '#a7bbbf',
    number: '#5c868b',
    numberDivider: '#ccdcde',
    numberHoverBg: '#e4ecec',
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: '#edc48a',
    articleTitle: '#61868c',
    articleHover: '#f3f6f9',
    articleStrip: contentBoxBg,
    articleBrief: '#a2c0c5',
    articleTag: '#71979a',
    articleLink: '#71979a',
    commentsUserBorder: contentBoxBg,
  },
  content: {
    bg: contentBoxBg,
  },
  footer: {
    text: '#b3ccc9',
    hover: '#5c868b',
    label: '#b7c6d0',
  },
  sidebar: {
    bg: sidebarBg,
    pin_active: primaryColor,
    menu_link: '#D9E6E5',
    border_color: '#14363E',
  },
  preview: {
    font: primaryColor,
    bg: contentBg,
    shadow: '-5px 0px 14px 0px rgba(189,189,189,0.37)',
    editorContainerBg: '#F9FCFC',
    editorHeaderBg: '#F9FCFC',
    editorBorder: '#F9FCFC',
    editorBorderActive: '#b3cacb',
    editorBorderNormal: '#e2eaea',
    editorTitle: '#5b8c91',
    footerText: '#a5c8ca',
    markdownHelperBg: '#F9FCFC',
    accountBg: '#F9FCFC',
    accountDivider: '#f4f4f5',
    articleBg: '#F9FCFC',
    reactionHoverBg: '#F9FCFC',
  },

  pagination: {
    itemBg: '#cbe7ea',
    itemBorderColor: '#cbe7ea',
    disableText: '#BCD9DC',
    text: '#6d7f7b',
    inactiveNum: 'white',
  },

  heatmap: {
    empty: '#E4EEED',
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
    tableBg: darken(0.01, contentBoxBg),
    tableBg2n: darken(0.05, contentBoxBg),
    tableborder: `1px solid ${darken(0.1, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: darken(0.1, contentBoxBg),
  },
  code: {
    bg: darken(0.05, contentBoxBg),
  },
  shell: {
    link: lighten(0.3, primaryColor),
    searchInput: lighten(0.3, primaryColor),
    searchIcon: lighten(0.3, primaryColor),
    barBg: darken(0.03, primaryColor),
    border: darken(0.05, primaryColor),
    title: lighten(0.3, bannerBg),
    desc: lighten(0.2, primaryColor),
    activeBg: darken(0.1, primaryColor),
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
    baseline: `1px solid ${bannerBg}`,
  },
  navigator: {
    activeBottom: `1.1px solid ${primaryColor}`,
    borderRight: `1px solid ${darken(0.05, bannerBg)}`,
    hoverBg: '#eee',
  },
  popover: {
    bg: '#f9fcfc',
    borderColor: '#51abb2',
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.8,
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Cyan
