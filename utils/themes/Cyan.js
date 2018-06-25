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
    spliter: darken(0.04, bannerBg),
    fixed: contentBoxBg,
    tabActive: '#61868c', // articleTitle
    tabOthers: lighten(0.1, '#849ca0'), // articleBrief
  },
  banner: {
    title: primaryColor,
    bg: bannerBg,
    desc: '#a3bbbd',
    spliter: darken(0.04, bannerBg),
    numberDesc: '#a7bbbf',
    number: '#5c868b',
    active: '#f1c48f',
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
    extraInfo: '#84C3C8',
  },
  content: {
    bg: contentBoxBg,
    cardBg: contentBoxBg,
    cardBorder: '#e6e6e6',
    cardBorderHover: primaryColor,
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
    title: '#83a2a5',
    desc: '#83a2a5',
    font: primaryColor,
    bg: contentBg,
    shadow: '-5px 0px 14px 0px rgba(189,189,189,0.37)',
    closerShadow: '-6px 4px 5px 2px rgba(156, 154, 154, 0.2)',
    markdownHelperBg: '#F9FCFC',
    accountBg: '#F9FCFC',
    accountDivider: '#f4f4f5',
    articleBg: '#F9FCFC',
    helper: '#d9e5e6',
    helperHover: '#83a2a5',
    topLine: 'orange',
    icon: 'tomato',
    divider: '#d7e4e3',
  },
  article: {
    link: '#b5ccce',
    linkHover: 'orange',
    reactionTitle: '#7f979a',
    reactionHoverBg: '#F9FCFC',
  },
  comment: {
    icon: '#62868a',
    title: '#62868a',
    username: '#62868a',
    number: '#efbc60',
    floor: '#efbc60',
    reply: '#93b3b5',
    replyBg: '#e8f1f2',
    placeholder: '#C0D9DA',
    filter: '#62868a',
    filterActive: primaryColor,
    action: '#62868a',
    // mention text displayed in article
    mentionText: '#91a4b5',
    mentionTextBg: '#fcffdb',
    // mention popover background
    mentionBg: '#F9FCFC',
    mentionBorder: primaryColor,
    mentionActiveBg: darken(0.1, '#F9FCFC'),
    mentionShadow: '0px 2px 10px 1px rgba(235, 235, 235, 1)',
  },
  editor: {
    title: '#5b8c91',
    content: '#a6bebf',
    placeholder: '#B3CFD0',
    headerBg: '#F9FCFC',
    contentBg: '#F9FCFC',
    border: '#F9FCFC',
    borderAcitve: '#b3cacb',
    borderNormal: '#e2eaea',
    footer: '#a5c8ca',
  },
  pagination: {
    itemBg: '#cbe7ea',
    itemBorderColor: '#cbe7ea',
    disableText: '#BCD9DC',
    text: '#6d7f7b',
    inactiveNum: 'white',
  },

  heatmap: {
    activityLow: '#D6ECB2',
    activityHight: '#4F966E',
    borderHover: '#51abb2',
    empty: '#E4EEED',
    monthLabel: '#c6dbde',
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },

  markdown: {
    title: primaryColor,
    fg: markdownFont,
    titleBottom: lighten(0.3, primaryColor),
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
    clicked: primaryColor,
  },
  navigator: {
    activeBottom: primaryColor,
    borderRight: darken(0.05, bannerBg),
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
  tabs: {
    headerActive: primaryColor,
    header: lighten(0.2, primaryColor),
    contentBg: '#FFFFFF',
    headerActiveBg: '#FFFFFF',
    headerBg: '#F7F9F9',
    headerActiveTop: primaryColor,
    border: '#E8E8E8',
  },
  modal: {
    bg: contentBoxBg,
    border: primaryColor,
    innerSelectBg: '#e4eeed45',
  },
  form: {
    inputBg: '#FFFFFF',
    inputBorder: '#88a4ad',
    text: '#88a4ad',
    label: '#88a4ad',
    border: '#B8C6C0',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Cyan
