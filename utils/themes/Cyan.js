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
  body_bg: contentBg,
  selection_bg: 'tomato',
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: `1px solid ${darken(0.04, bannerBg)}`,
    fixed: contentBoxBg,
    tab_active: '#61868c', // article_title
    tab_others: lighten(0.1, '#849ca0'), // article_brief
  },
  banner: {
    fg: primaryColor,
    bg: bannerBg,
    desc: '#a3bbbd',
    spliter: `1px solid ${darken(0.04, bannerBg)}`,
    number_desc: '#a7bbbf',
    number: '#5c868b',
    number_divider: '#ccdcde',
    number_hover_bg: '#e4ecec',
  },
  thread: {
    bg: contentBoxBg,
    filter_result_hint: '#edc48a',
    article_title: '#61868c',
    article_hover: '#f3f6f9',
    article_strip: contentBoxBg,
    article_brief: '#a2c0c5',
    comments_user_border: contentBoxBg,
  },
  pagination: {
    item_bg: '#cbe7ea',
    item_border_color: '#cbe7ea',
    disable_text: '#BCD9DC',
    text: '#6d7f7b',
    inactive_num: 'white',
  },
  content: {
    bg: contentBoxBg,
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
    editor_container_bg: '#F9FCFC',
    editor_header_bg: '#F9FCFC',
    editor_border: '#F9FCFC',
    editor_border_active: '#b3cacb',
    editor_border_normal: '#e2eaea',
    editor_title: '#5b8c91',
    footer_text: '#a5c8ca',
    markdown_helper_bg: '#F9FCFC',
    account_bg: '#F9FCFC',
    account_divider: '#f4f4f5',
    article_bg: '#F9FCFC',
    reaction_hover_bg: '#F9FCFC',
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
    search_input: lighten(0.3, primaryColor),
    search_icon: lighten(0.3, primaryColor),
    bar_bg: darken(0.03, primaryColor),
    border: darken(0.05, primaryColor),
    title: lighten(0.3, bannerBg),
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
    baseline: `1px solid ${bannerBg}`,
  },
  navigator: {
    activeBottom: `1.1px solid ${primaryColor}`,
    borderRight: `1px solid ${darken(0.05, bannerBg)}`,
    hoverBg: '#eee',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Cyan
