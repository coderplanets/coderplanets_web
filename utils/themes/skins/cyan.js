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
const markdownFont = '#9eb8bd'

const descText = '#a3bbbd'
const primaryMate = 'orange'

const cyan = {
  logoText: descText,
  cover: primaryColor,
  coverIndex: '#F9FCFC',
  contrastFg: '#eca014',
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
  selectionBg: '#A0BBBC',
  avatarOpacity: 1,
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: contentBoxBg,
    tabActive: '#61868c', // articleTitle
    tabOthers: lighten(0.1, '#849ca0'),
    cardBg: '#e6ecec',
    cardBorder: '#ccd8d6',
    cardLogo: '#A0BBBD',
    cardTitle: '#a0b5b9',
  },
  banner: {
    title: primaryColor,
    bg: bannerBg,
    desc: descText,
    spliter: bannerBg,
    numberDesc: '#a7bbbf',
    number: '#83a7ad',
    active: primaryMate,
    numberDivider: '#ccdcde',
    numberHoverBg: '#e4ecec',
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#83a7ad',
    articleHover: '#f3f6f9',
    articleStrip: contentBoxBg,
    articleDigest: '#a2c0c5',
    articleTag: '#71979a',
    articleLink: descText,
    articleDivider: '#dce5e6',
    commentsUserBorder: contentBoxBg,
    extraInfo: '#84C3C8',
    articleSpliter: '#dee8ea',
    // like github
    repoTitle: '#83a7ad',
  },
  content: {
    bg: contentBoxBg,
    border: contentBoxBg,
    cardBg: contentBoxBg,
    cardBorder: '#e6e6e6',
    cardBorderHover: primaryColor,
  },
  footer: {
    text: '#b3ccc9',
    hover: '#5c868b',
    title: primaryColor,
    bottomBg: '#d9e6e5',
  },
  sidebar: {
    bg: sidebarBg,
    holder: lighten(0.15, sidebarBg),
    logoText: '#5e9aa2',
    menuHover: darken(0.1, sidebarBg),
    pinActive: primaryColor,
    menuLink: '#D9E6E5',
    borderColor: '#14363E',
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
    articleBg: '#F9FCFC',
    helper: '#d9e5e6',
    helperHover: '#83a2a5',
    topLine: primaryColor,
    icon: 'tomato',
    divider: '#e0e6e5',
  },
  article: {
    link: '#b5ccce',
    linkHover: 'orange',
    reactionTitle: '#7f979a',
    reactionHoverBg: '#f3f7f7',
  },
  comment: {
    icon: '#62868a',
    didIcon: 'orange',
    title: '#62868a',
    username: '#7FA7AC',
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
    title: '#7ea9ad',
    content: '#a6bebf',
    placeholder: '#B3CFD0',
    headerBg: '#F9FCFC',
    contentBg: '#F9FCFC',
    border: '#F9FCFC',
    borderActive: descText,
    borderNormal: '#e2eaea',
    footer: '#a6bebf',
    footerHover: darken(0.05, '#a6bebf'),
  },
  pagination: {
    activeNum: 'white',
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
    scale_1: '#bbd9da',
    scale_2: '#a0c7ca',
    scale_3: '#83bfc1',
    scale_4: '#5092A4',
    scale_5: '#427583',
  },
  geoMap: {
    oceanColor: '#F9FCFC',
    regionBg: '#A0BCBD',
    restRegionBg: '#D9E6E5',
    borderStroke: '#A0BBBD',
    markerBg: '#C2DEB6',
    markerShadow: '#C2DEB6',
  },
  bannerHeatmap: {
    activityLow: '#D6ECB2',
    activityHight: '#4F966E',
    borderHover: '#51abb2',
    empty: '#E4EEED',
    monthLabel: descText,
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
    blockquoteBorder: '#b8d0ce',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: '#7c999c',
    strongBg: contentBoxBg,
    link: '#c5ba78',
    tableBg: darken(0.01, contentBoxBg),
    tableBg2n: darken(0.05, contentBoxBg),
    tableborder: `1px solid ${darken(0.1, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: darken(0.1, contentBoxBg),
    br: '#e8e8e8',
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
    dotOpacity: 0.4,
    text: '#83a7ad',
  },
  tagger: {
    text: '#d2a05f',
    bg: '#fff2b3',
    border: '#fff2b3',
    closeBtn: '#d2a05f',
  },
  tabs: {
    headerActive: primaryColor,
    header: lighten(0.15, primaryColor),
    contentBg: '#FFFFFF',
    headerBg: '#F7F9F9',
    headerActiveTop: primaryColor,
    border: '#E8E8E8',
    bottomLine: '#d9e9ea',
  },
  modal: {
    bg: contentBoxBg,
    border: primaryColor,
    innerSelectBg: '#e4eeed45',
  },
  form: {
    inputBg: '#FFFFFF',
    text: '#88a4ad',
    label: '#88a4ad',
    border: '#B8C6C0',
    shadow: 'rgba(184, 198, 192, 0.3)',
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
  toast: {
    bg: contentBoxBg,
    border: descText,
    message: descText,
    title: primaryColor,
    infoBar: primaryColor,
    errorBar: '#f59381',
    successBar: '#9dd035',
    warnBar: '#f5a30e',
  },
  mailBox: {
    headHightBg: '#e8f9f8',
  },
  alertWarn: {
    border: '#ffe58f',
    bg: '#fffbe6',
    text: '#c3ae8e',
  },
}

export default cyan
