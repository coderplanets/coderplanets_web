//
/*
 * a theme inspired by https://dribbble.com/shots/2478998-Forum-Concept
 */

import { lighten, darken } from 'polished'

const primaryColor = '#98dab4'

const bannerBg = '#477479'
const contentBg = '#528187'
const contentBoxBg = '#54848A'
const fontColor = primaryColor
const sidebarBg = '#00B5B0'
const markdownFont = '#B4C7C6'

const descText = '#7EA7AC'

const IconGreen = {
  logoText: descText,
  cover: bannerBg,
  coverIndex: '#F9FCFC',
  contrastFg: 'orange',
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
  avatarOpacity: 0.8,
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: bannerBg,
    tabActive: darken(0.05, primaryColor),
    tabOthers: lighten(0.08, descText),
  },
  banner: {
    title: '#c3cdd0',
    bg: bannerBg,
    desc: descText,
    spliter: '#4f8486',
    numberDesc: darken(0.08, descText),
    number: '#83a7ad',
    active: primaryColor,
    numberDivider: '#4f8486',
    numberHoverBg: '#4D8489',
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#e4e4e4',
    articleHover: '#528187',
    articleStrip: contentBoxBg,
    articleDigest: '#B6C7C8',
    articleTag: '#B4C7C8',
    articleLink: descText,
    commentsUserBorder: contentBoxBg,
    extraInfo: '#95e4be',
    articleSpliter: '#79A7A9',
  },
  content: {
    bg: contentBoxBg,
    cardBg: contentBoxBg,
    cardBorder: '#e6e6e6',
    cardBorderHover: primaryColor,
  },
  footer: {
    text: descText,
    hover: '#5c868b',
    label: descText,
  },
  sidebar: {
    logoText: primaryColor,
    bg: sidebarBg,
    menuHover: darken(0.05, sidebarBg),
    pinActive: '#54848B',
    menuLink: '#F0F9F8',
    borderColor: '#14363E',
  },
  preview: {
    title: '#C2CDD0',
    desc: descText,
    font: primaryColor,
    bg: bannerBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: '#F9FCFC',
    accountBg: contentBoxBg,
    articleBg: contentBoxBg,
    helper: descText,
    helperHover: lighten(0.08, descText),
    topLine: sidebarBg,
    icon: primaryColor,
    divider: descText,
  },
  article: {
    link: primaryColor,
    linkHover: lighten(0.05, primaryColor),
    reactionTitle: descText,
    reactionHoverBg: contentBg,
  },
  comment: {
    icon: '#62868a',
    didIcon: primaryColor,
    title: '#AAC1C1',
    username: '#DFDCD8',
    number: primaryColor,
    floor: primaryColor,
    reply: '#b5d4d6',
    replyBg: '#60959a',
    placeholder: descText,
    filter: descText,
    filterActive: primaryColor,
    action: descText,
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
    title: '#DBE1E4',
    content: '#AEC7C8',
    placeholder: descText,
    headerBg: contentBoxBg,
    contentBg: contentBoxBg,
    border: contentBoxBg,
    borderAcitve: primaryColor,
    borderNormal: descText,
    footer: descText,
    footerHover: darken(0.05, '#a6bebf'),
  },
  pagination: {
    activeNum: '#417478',
    itemBg: bannerBg,
    itemBorderColor: bannerBg,
    disableText: '#6ea6a9',
    text: '#B4C7C8',
    inactiveNum: descText,
  },

  heatmap: {
    activityLow: '#D6ECB2',
    activityHight: '#4F966E',
    borderHover: '#51abb2',
    empty: '#4f797d',
    monthLabel: '#c6dbde',
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
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
    empty: '#4f797d',
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
    fg: '#426F7E',
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
    bg: contentBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.8,
    text: lighten(0.05, descText),
  },
  tabs: {
    headerActive: primaryColor,
    header: descText,
    contentBg: '#5b8b90',
    headerBg: '#5b8b90',
    headerActiveTop: primaryColor,
    border: '#5b8b90',
    bottomLine: descText,
  },
  modal: {
    bg: '#4f858a',
    border: primaryColor,
    innerSelectBg: bannerBg,
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
    headHightBg: bannerBg,
  },
  alertWarn: {
    border: '#ffe58f',
    bg: '#fffbe6',
    text: '#c3ae8e',
  },
}

export default IconGreen
