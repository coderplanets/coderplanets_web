/*
 * a theme inspired by Muzli && unbuntu
 */
import { lighten, darken } from 'polished'

const primaryColor = '#615c79'

const bannerBg = '#2f2c3c'
const contentBg = '#242029'
const contentBoxBg = '#27212d'
const fontColor = primaryColor
const sidebarBg = '#222029'
const markdownFont = '#7F8189'

const descText = '#4a455a'
const primaryMate = '#a7674d'

const Blue = {
  logoText: primaryColor,
  cover: '#586ABD',
  coverIndex: '#9e96c3',
  htmlBg: contentBoxBg,
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
  selectionBg: '#839496',
  avatarOpacity: 0.8,
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: bannerBg,
    tabActive: primaryColor, // articleTitle
    tabOthers: darken(0.1, primaryColor),
  },
  banner: {
    title: primaryColor,
    bg: bannerBg,
    desc: descText,
    spliter: darken(0.04, bannerBg),
    number: primaryColor,
    active: primaryMate,
    numberDesc: descText,
    numberDivider: darken(0.08, descText),
    numberHoverBg: lighten(0.03, bannerBg),
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#737990',
    articleHover: lighten(0.03, contentBoxBg),
    articleStrip: contentBoxBg,
    articleDigest: '#505667',
    articleTag: '#526482',
    articleLink: descText,
    commentsUserBorder: contentBoxBg,
    extraInfo: primaryMate,
  },
  content: {
    bg: contentBoxBg,
    cardBg: bannerBg,
    cardBorder: lighten(0.08, contentBoxBg),
    cardBorderHover: lighten(0.1, contentBoxBg),
  },
  footer: {
    text: descText,
    hover: lighten(0.1, descText),
    label: descText,
  },
  sidebar: {
    bg: sidebarBg,
    menuHover: lighten(0.1, sidebarBg),
    pinActive: '#849804',
    menuLink: '#93A1A1',
    borderColor: lighten(0.05, sidebarBg),
  },
  preview: {
    title: primaryColor,
    desc: lighten(0.05, descText),
    font: fontColor,
    bg: contentBoxBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: lighten(0.04, contentBg),
    accountBg: lighten(0.04, contentBg),
    articleBg: lighten(0.04, contentBg),
    helper: lighten(0.2, contentBg),
    helperHover: lighten(0.3, contentBg),
    topLine: '#c387e8',
    icon: '#845145',
    divider: darken(0.07, descText),
  },
  article: {
    link: primaryMate,
    linkHover: lighten(0.05, primaryMate),
    reactionTitle: primaryColor,
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    icon: primaryColor,
    didIcon: primaryMate,
    title: primaryColor,
    username: primaryColor,
    number: primaryMate,
    floor: primaryMate,
    reply: primaryColor,
    replyBg: '#3d3644',
    placeholder: descText,
    filter: descText,
    filterActive: primaryColor,
    action: primaryColor,
    // mention text displayed in article
    mentionText: '#70768B',
    mentionTextBg: '#423a4a',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: primaryColor,
    mentionActiveBg: lighten(0.1, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.8)',
  },
  editor: {
    title: primaryColor,
    content: '#6E717A',
    placeholder: darken(0.03, descText),
    headerBg: bannerBg,
    contentBg: bannerBg,
    border: bannerBg,
    borderAcitve: primaryColor,
    borderNormal: lighten(0.05, bannerBg),
    footer: descText,
    footerHover: lighten(0.05, descText),
  },
  pagination: {
    activeNum: 'white',
    itemBg: darken(0.1, descText),
    itemBorderColor: darken(0.06, descText),
    disableText: descText,
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#342e3a',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: lighten(0.04, '#342e3a'),
    scale_2: lighten(0.08, '#342e3a'),
    scale_3: lighten(0.12, '#342e3a'),
    scale_4: lighten(0.18, '#342e3a'),
    scale_5: lighten(0.3, '#342e3a'),
  },
  bannerHeatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#342e3a',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: lighten(0.04, '#342e3a'),
    scale_2: lighten(0.08, '#342e3a'),
    scale_3: lighten(0.12, '#342e3a'),
    scale_4: lighten(0.18, '#342e3a'),
    scale_5: lighten(0.3, '#342e3a'),
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
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.1, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.4, contentBg),
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
    bg: bannerBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.5,
    text: '#72788D',
  },
  tabs: {
    headerActive: primaryColor,
    header: darken(0.05, primaryColor),
    contentBg: lighten(0.05, contentBoxBg),
    headerBg: lighten(0.03, contentBoxBg),
    headerActiveTop: primaryColor,
    border: descText,
    bottomLine: descText,
  },
  modal: {
    bg: bannerBg,
    border: primaryColor,
    innerSelectBg: '#333040',
  },
  form: {
    inputBg: lighten(0.03, contentBoxBg),
    text: descText,
    label: primaryColor,
    border: descText,
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Blue
