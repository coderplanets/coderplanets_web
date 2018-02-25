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
    fixed: secondHalfBg,
  },
  banner: {
    fg: primaryColor,
    bg: topHalfBg,
    desc: lighten(0.3, secondHalfBg),
    spliter: `1px solid ${darken(0.04, topHalfBg)}`,
    number_desc: lighten(0.2, secondHalfBg),
    number: lighten(0.3, secondHalfBg),
    number_divider: lighten(0.1, secondHalfBg),
    number_hover_bg: lighten(0.1, secondHalfBg),
  },
  paper: {
    bg: secondHalfBg,
    filter_result_hint: '#556d23',
    article_title: '#797393',
    article_hover: lighten(0.04, secondHalfBg),
    article_brief: '#645f6b',
    comments_user_border: secondHalfBg,
  },
  pagination: {
    item_bg: lighten(0.05, secondHalfBg),
    item_border_color: lighten(0.05, secondHalfBg),
    disable_text: lighten(0.05, secondHalfBg),
    text: primaryColor,
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
    empty: lighten(0.1, mainBg),
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
