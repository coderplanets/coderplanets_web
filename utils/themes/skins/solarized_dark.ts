/*
 * inspired by solarized proj: http://ethanschoonover.com/solarized
 */
// some selection color not supported
import { lighten, darken } from 'polished'

const primaryColor = '#2d7eb1'

const bannerBg = '#003B4A'
const contentBg = '#002A35'
const contentBoxBg = '#08313e' // '#10313e' // '#0e303c' // #072d3a
const fontColor = primaryColor
const sidebarBg = '#001B21'
const markdownFont = '#687F82'

const articleDigest = '#86999d'

const descText = '#126682'
const primaryMate = '#2CB4AA'

const solarizedDark = {
  _meta: {
    category: 'dark',
  },
  name: 'solarizedDark',
  logoText: primaryColor,
  cover: lighten(0.08, bannerBg),
  coverIndex: primaryMate,
  contrastFg: 'orange',
  htmlBg: '#002A34',
  spaceBg: '#062129',
  mobileTab: bannerBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: '#0E3B49',
  baseColor: {
    red: '#ca5f4d',
    orange: '#ad735c',
    yellow: '#B0BA6C',
    green: '#699411',
    cyan: '#24878C',
    blue: '#456fbd',
    purple: '#7d519e',

    grey: '#106d8a',
    pink: '#b36976',

    pinkLite: '#82606b',
    pinkBtnText: '#ded0d0',
  },
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: '#0a3442',
    fixed: bannerBg,
    tabActive: primaryColor, // articleTitle
    tabOthers: darken(0.1, primaryColor),
    cardBg: '#002A34',
    cardBorder: '#003B49',
    cardLogoText: '#006177',
    cardTitle: '#007373',
  },
  banner: {
    title: '#a3babb',
    bg: bannerBg,
    desc: articleDigest,
    spliter: darken(0.03, bannerBg),
    number: '#889fa0',
    active: primaryMate,
    numberDesc: darken(0.04, '#6c8084'),
    numberDivider: '#1b475d',
    numberHoverBg: '#0d475a',
    linearGradient: 'linear-gradient(#043B49, #022A35)',
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#a3babb',
    articleStrip: contentBoxBg,
    articleDigest,
    articleTag: primaryColor,
    articleLink: descText,
    articleDivider: '#0B3B4D',
    commentsUserBorder: contentBoxBg,
    extraInfo: darken(0.04, primaryMate), // '#987d40',
    articleSpliter: '#014454',
    // like github
    repoTitle: '#7B8F90',
  },
  content: {
    bg: contentBoxBg,
    border: contentBoxBg,
    cardBg: bannerBg,
    cardBorder: '#194f6f',
    cardBorderHover: '#0F6186',
  },
  footer: {
    text: '#065365',
    hover: '#147f7e',
    title: '#1a687d',
    bottomBg: '#061b20',
  },
  sidebar: {
    bg: sidebarBg,
    activeBar: '#2598ca',
    holder: lighten(0.15, sidebarBg),
    logoText: primaryColor,
    menuHover: lighten(0.05, sidebarBg),
    pinActive: '#227B7F',
    menuLink: '#7e98a9',
    borderColor: '#14363E',
    headerShadow: '-2px 1px 6px 0px rgb(1,21,25)',
    headerShadowBorderBottom: '1px solid #06495a',
    footerShadow: '-1px -4px 4px 0px rgb(1,21,25)',
    footerShadowBorderBottom: '1px dashed #06495a',
    searchInputBottom: '#154964',
    searchInputBottomActive: '#2e78a4',
    searchInputHolder: '#17414E',
  },
  drawer: {
    title: primaryColor,
    desc: '#1b6d88',
    font: fontColor,
    bg: contentBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: lighten(0.04, contentBg),
    accountBg: lighten(0.04, contentBg),
    articleBg: '#00333E',
    helper: lighten(0.1, contentBg),
    helperHover: lighten(0.2, contentBg),
    topLine: '#41c7bd',
    icon: '#41c7bd',
    divider: '#004250',
    /* single article page sidebar divider */
    sideDivider: '#094556',
  },
  article: {
    link: '#276788',
    linkHover: '#00A097',
    reactionTitle: '#62868a',
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    bg: '#08303c',
    icon: '#62868a',
    didIcon: 'orange',
    title: '#62868a',
    username: '#62868a',
    number: '#00A59B',
    floor: '#5c8186',
    reply: '#638688',
    replyBg: '#013340',
    placeholder: '#62868a',
    filter: '#62868a',
    filterActive: primaryColor,
    action: '#4d6a6d',
    // mention text displayed in article
    mentionText: '#91a4b5',
    mentionTextBg: '#115267',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: primaryColor,
    mentionActiveBg: lighten(0.1, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.8)',

    indentLine: '#035163',
    indentActive: '#4b6669',
  },
  editor: {
    title: '#2a867f',
    content: '#467E93',
    placeholder: '#1E5162',
    headerBg: '#0e3444',
    contentBg: '#0e3444',
    border: '#0e3444',
    borderActive: '#10627b',
    borderNormal: '#2d505f',
    footer: descText,
    footerHover: lighten(0.05, descText),
  },
  pagination: {
    activeNum: 'white',
    itemBg: '#103440',
    itemBorderColor: '#103440',
    disableText: '#1d5365',
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#024352',
    borderHover: descText,
    monthLabel: descText,
    scale_1: '#035b63',
    scale_2: '#007470',
    scale_3: '#048a84',
    scale_4: '#05a78e',
    scale_5: '#01c3a5',
  },
  geoMap: {
    oceanColor: '#002D39',
    regionBg: '#024a5d',
    restRegionBg: darken(0.01, bannerBg),
    borderStroke: descText,
    markerBg: darken(0.08, '#41c7bd'),
    markerShadow: darken(0.08, '#41c7bd'),
  },
  bannerHeatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#024352',
    borderHover: descText,
    monthLabel: descText,
    scale_1: '#035b63',
    scale_2: '#007470',
    scale_3: '#048a84',
    scale_4: '#05a78e',
    scale_5: '#01c3a5',
  },
  markdown: {
    title: '#98a1a2',
    fg: markdownFont,
    titleBottom: '#154452',
    hrColor: 'tomato', // #154452
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#2382C4',
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
    br: '#29576b',
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.2, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.3, contentBg),
    desc: lighten(0.2, contentBg),
    activeBg: lighten(0.05, contentBg),
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
    hoverBg: lighten(0.05, bannerBg),
  },
  popover: {
    bg: '#00333F',
    borderColor: '#114e61',
    boxShadow: '0px 7px 20px 10px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.6,
    text: '#69848a',
  },
  tagger: {
    text: '#a7bfbf',
    bg: '#004C61',
    border: '#004C61',
    closeBtn: '#a7bfbf',
  },
  tabs: {
    headerActive: primaryColor,
    header: darken(0.05, primaryColor),
    contentBg: '#0F4553',
    headerBg: '#0d3a49',
    headerActiveTop: primaryColor,
    border: '#265663',
    bottomLine: descText,
  },
  modal: {
    bg: bannerBg,
    border: '#1d5171',
    innerSelectBg: '#03323e',
    subPanel: '#00313d',
    subPanelShadow: 'drop-shadow(3px 3px 6px #002a34)',
  },
  form: {
    inputBg: '#002D39',
    text: '#617F82',
    label: '#3d6d82',
    border: '#005256',
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
  table: {
    headerBg: '#024858',
    headTitle: '#83a7ad',
    text: '#83a7ad',
    border: '#004657',
    hoverBg: '#285769',
  },
  searchHighlight: {
    doramonFg: 'orange',
    doramonBg: 'transparent',
  },
  tooltip: {
    text: '#95C1DD',
    bg: '#0a475f',
  },
  dropdown: {
    bg: '#0a4d61',
  },
  // pages
  haveADrinkPage: {
    bg: '#01313e',
    sentence: '#6f8b96',
    hint: '#577079',
    divider: '#27424c',
    dropdownBg: '#0a4d61',
  },
  avatar: {
    opacity: 0.8,
    quote: '#217470',
    fallbackBg: '#074857',
    shadow: '0px 0px 4px 0px rgb(0 0 0 / 50%) inset',
    quoteShadow: '0px 0px 3px 0px rgb(0 0 0 / 30%) inset',
  },
}

export default solarizedDark
