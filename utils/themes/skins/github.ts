/*
 * a theme inspired by github
 */
import { lighten, darken } from 'polished'

const primaryColor = '#000000'

const bannerBg = '#fff'
const contentBg = '#fff'
const contentBoxBg = '#fff'
const fontColor = primaryColor
const sidebarBg = '#23292E'
const markdownFont = '#9eb8bd'

const descText = '#666'
const threadTitle = '#333333'
// const primaryMate = 'orange'

const github = {
  _meta: {
    category: 'light',
  },
  name: 'github',
  logoText: descText,
  cover: 'white',
  coverIndex: '#F9FCFC',
  contrastFg: '#eca014',
  htmlBg: bannerBg,
  spaceBg: '#181c1f',
  mobileTab: '#323344',
  loading: {
    basic: darken(0.05, contentBg),
    animate: contentBg,
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
    fg: '#8c8c8c',
    bg: bannerBg,
    spliter: '#efefef',
    fixed: contentBoxBg,
    tabActive: '#EB6224', // articleTitle
    tabOthers: lighten(0.1, '#849ca0'),
    cardBg: '#ffffff',
    cardBorder: '#e6e6e6',
    cardLogoText: 'lightgrey',
    cardTitle: 'darkgrey',
  },
  banner: {
    title: '#949494',
    bg: bannerBg,
    desc: '#cccccc',
    spliter: '#eae9e9',
    numberDesc: '#cccccc',
    number: '#949494',
    active: '#669ede',
    numberDivider: '#eae9e9',
    numberHoverBg: '#f3f3f3',
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: threadTitle,
    articleStrip: contentBoxBg,
    articleDigest: descText,
    articleTag: '#71979a',
    articleLink: descText,
    articleDivider: '#dce5e6',
    commentsUserBorder: contentBoxBg,
    extraInfo: '#8590a6', // descText,
    articleSpliter: '#dee8ea',

    // like github
    repoTitle: '#6ba0d8',
  },
  content: {
    bg: contentBoxBg,
    border: '#EEEEEE',
    cardBg: contentBoxBg,
    cardBorder: '#e6e6e6',
    cardBorderHover: primaryColor,
  },
  footer: {
    text: '#c7c7c7',
    hover: '#949CB5',
    title: '#77706B',
    bottomBg: '#252325',
  },
  sidebar: {
    bg: sidebarBg,
    activeBar: '#87a791',
    holder: lighten(0.15, sidebarBg),
    logoText: '#5e9aa2',
    menuHover: darken(0.1, sidebarBg),
    pinActive: 'yellowgreen',
    menuLink: '#D9E6E5',
    borderColor: '#14363E',
    headerShadow: '0px 6px 4px 0px rgba(0,0,0,0.2)',
    headerShadowBorderBottom: '1px dashed #3d5a51',
    footerShadow: '-1px -4px 4px 0px rgba(0,0,0,0.2)',
    footerShadowBorderBottom: '1px dashed #3d5a51',
    searchInputBottom: '#3A3948',
    searchInputBottomActive: '#3B8250',
    searchInputHolder: '#3B3948',
  },
  drawer: {
    title: threadTitle,
    desc: descText,
    font: primaryColor,
    bg: contentBg,
    shadow: '-4px 3px 10px 0px rgb(143 143 143 / 27%)',
    closerShadow: '-6px 4px 5px 2px rgba(156, 154, 154, 0.2)',
    markdownHelperBg: '#F9FCFC',
    accountBg: '#FFFFFF',
    articleBg: '#FFFFFF',
    helper: '#d9e5e6',
    helperHover: '#83a2a5',
    topLine: '#22292E',
    icon: 'tomato',
    divider: '#e0e6e5',
    /* single article page sidebar divider */
    sideDivider: '#e4e4e4',
  },
  article: {
    link: '#b5ccce',
    linkHover: 'orange',
    reactionTitle: '#7f979a',
    reactionHoverBg: '#f3f7f7',
  },
  comment: {
    bg: contentBg,
    icon: 'grey',
    didIcon: 'orange',
    title: 'grey',
    username: '#7FA7AC',
    number: '#efbc60',
    floor: '#8590a6',
    reply: '#93b3b5',
    replyBg: '#f3f3f3',
    placeholder: '#C0D9DA',
    filter: 'grey',
    filterActive: primaryColor,
    action: '#8590a6',
    // mention text displayed in article
    mentionText: '#91a4b5',
    mentionTextBg: '#fcffdb',
    // mention popover background
    mentionBg: '#F9FCFC',
    mentionBorder: primaryColor,
    mentionActiveBg: darken(0.1, '#F9FCFC'),
    mentionShadow: '0px 2px 10px 1px rgba(235, 235, 235, 1)',

    indentLine: '#d5d5d5',
    indentActive: descText,
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
    activityLow: darken(0.2, '#6EC385'),
    activityHight: 'yellowgreen',
    empty: '#efefef',
    borderHover: '#51abb2',
    monthLabel: '#c6dbde',
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },
  geoMap: {
    oceanColor: '#F8F8F8',
    regionBg: '#D7D8D9',
    restRegionBg: '#FAFBFC',
    borderStroke: '#CFD3D7',
    markerBg: '#F7B5A0',
    markerShadow: '#F7B5A0',
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
    link: '#bbb9b7',
    searchInput: '#bbb9b7',
    searchIcon: '#bbb9b7',
    barBg: '#F0F0F0',
    border: darken(0.05, '#F0F0F0'),
    title: '#949494',
    desc: '#bbb9b7',
    activeBg: '#e6e6e6',
  },
  button: {
    primary: primaryColor,
    fg: '#FFFFFF',
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
    bg: '#fff',
    borderColor: '#e9e9ea',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.7,
    text: descText,
  },
  tagger: {
    text: '#d2a05f',
    bg: '#fff2b3',
    border: '#fff2b3',
    closeBtn: '#d2a05f',
  },
  tabs: {
    headerActive: '#EB6224',
    header: '#b5b5b5',
    contentBg: '#FFFFFF',
    headerBg: '#F7F9F9',
    headerActiveTop: primaryColor,
    border: '#E8E8E8',
    bottomLine: '#E1E4E8',
  },
  modal: {
    bg: contentBoxBg,
    border: primaryColor,
    innerSelectBg: '#e4eeed45',
    subPanel: '#00313d',
    subPanelShadow: 'drop-shadow(3px 3px 6px #002a34)',
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
  table: {
    headerBg: '#F8F8F8',
    headTitle: '#949494',
    text: '#949497',
    border: '#F0F0F0',
    hoverBg: '#FAFBFC',
  },
  searchHighlight: {
    doramonFg: 'orange',
    doramonBg: 'transparent',
  },
  tooltip: {
    text: '#F0F6FA',
    bg: '#2B2B2B',
  },
  avatar: {
    opacity: 1,
    quote: '#217470',
    fallbackBg: '#F5F5F5',
    shadow: '0px 0px 4px 0px rgb(0 0 0 / 50%) inset',
    quoteShadow: '0px 0px 3px 0px rgb(0 0 0 / 30%) inset',
  },
}

export default github
