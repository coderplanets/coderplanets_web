/*
 * a theme inspired by solarized: http://ethanschoonover.com/solarized
*/
// some selection color not supported
import { lighten, darken } from 'polished'

const primaryColor = '#2d7eb1'
const topHalfBg = '#003B4A' // header, banner ...
const mainBg = '#002A35'
const secondHalfBg = mainBg // main content

const fontColor = primaryColor
const sidebarBg = '#001B21'

const markdownFont = '#839496'

const SolarizedDark = {
  htmlBg: secondHalfBg,
  loading: {
    basic: topHalfBg,
    animate: lighten(0.03, topHalfBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, secondHalfBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  body_bg: mainBg,
  selection_bg: '#839496',
  header: {
    fg: primaryColor,
    bg: topHalfBg,
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
  },
  banner: {
    fg: primaryColor,
    bg: topHalfBg,
    desc: '#436b90',
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
    number_desc: '#436b90',
    number: '#377788',
    number_divider: '1px solid #1b475d',
    number_hover_bg: '#0d475a',
  },
  paper: {
    bg: secondHalfBg,
    filter_result_hint: '#556d23',
    article_title: '#427f98',
    article_hover: '#113744',
    article_brief: '#6B7F83',
  },
  pagination: {
    item_bg: '#103440',
    item_border_color: '#103440',
    disable_text: '#1d5365',
    text: primaryColor,
  },
  content: {
    bg: secondHalfBg,
  },
  sidebar: {
    bg: sidebarBg,
    pin_active: '#849804',
    menu_link: '#93A1A1',
    border_color: '#14363E',
  },
  preview: {
    font: fontColor,
    bg: mainBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    editor_container_bg: '#0e3444',
    editor_header_bg: '#0e3444',
    editor_border: '#0e3444',
    editor_border_active: primaryColor,
    editor_border_normal: '#506562',
    editor_title: '#4E7E95',
    footer_text: '#2B597B',
    markdown_helper_bg: lighten(0.04, mainBg),
    account_bg: lighten(0.04, mainBg),
    account_divider: '#184a5d',
    article_bg: lighten(0.04, mainBg),
    reaction_hover_bg: lighten(0.04, mainBg),
  },

  heatmap: {
    empty: '#2D5664',
  },

  markdown: {
    title: darken(0.05, '#DBE0E1'),
    fg: markdownFont,
    titleBottom: '1px solid #154452',
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#2382C4',
    tableBg: lighten(0.01, secondHalfBg),
    tableBg2n: lighten(0.05, secondHalfBg),
    tableborder: `1px solid ${lighten(0.07, secondHalfBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, secondHalfBg),
  },
  code: {
    bg: lighten(0.03, secondHalfBg),
  },
  shell: {
    link: lighten(0.2, mainBg),
    search_input: lighten(0.1, mainBg),
    search_icon: lighten(0.1, mainBg),
    bar_bg: darken(0.01, mainBg),
    border: lighten(0.05, mainBg),
    title: lighten(0.4, mainBg),
    desc: lighten(0.2, mainBg),
    active_bg: lighten(0.05, mainBg),
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
    normalText: darken(0.05, primaryColor),
    bottom_bar: primaryColor,
    baseline: `1px solid ${topHalfBg}`,
  },
  navigator: {
    activeBottom: `1.1px solid ${primaryColor}`,
    borderRight: `1px solid ${darken(0.05, topHalfBg)}`,
    hoverBg: lighten(0.05, topHalfBg),
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default SolarizedDark
