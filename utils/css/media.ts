import { css as styledCss } from 'styled-components'

import { METRIC } from '../constant'

export const mediaBreakPoints = {
  // mobileS: '320px',
  // mobileM: '375px',
  mobile: 576,
  tablet: 768,
  laptop: 992,
  laptopM: 1280,
  laptopL: 1440,
  maxContent: 1520, // WIDTH.COMMUNITY.PAGE
  desktop: 1600,
  // currently used as forms of drawer content (slideout/modal)
  desktopL: 1920,
}

// PAGE: 页面宽度 (不包括背景图) for footer, header etc
// CONTENT: 内容宽度
export const WIDTH = {
  COMMUNITY: {
    PAGE: '1460px',
    CONTENT: '1024px',
    CONTENT_OFFSET: '34px',
    LAPTOP_M_PADDING: '44px',
  },
  USER: {
    PAGE: '1200px',
    CONTENT: '1024px',
  },
  DISCOVERY: {
    CONTENT: '1100px',
  },
  ARTICLE: {
    PAGE: '1460px',
    CONTENT: '630px',
    CONTENT_OFFSET: '290px',
    CONTENT_OFFSET_LAPTOPL: '260px',
    CONTENT_OFFSET_DESKTOPL: '400px',
    STICKER: '260px',
    STICKER_LAPTOPL: '240px',
  },
  WORKS: {
    CONTENT: '1100px',
  },
  COOL_GUIDE: {
    CONTENT: '1150px',
    LAPTOP_M_PADDING: '45px',
  },
  RECIPES: {
    CONTENT: '1150px',
    LAPTOP_M_PADDING: '45px',
  },
  MEETUPS: {
    CONTENT: '1150px',
  },

  HAVE_A_DRINK: {
    CONTENT: '1120px',
  },
  TREADING: {
    CONTENT: '1120px',
  },

  SPONSOR: {
    PAGE: '1460px',
    CONTENT: '1080px',
  },

  MEMBERSHIP: {
    CONTENT: '1080px',
  },

  FRIENDS: {
    PAGE: '1460px',
    CONTENT: '1080px',
  },

  ARTICLE_EDITOR: {
    PAGE: '1461px',
    CONTENT: '650px',
  },

  HELP_CENTER: {
    PAGE: '1460px',
    CONTENT: '1024px',
    CONTENT_OFFSET: '10px',
  },
}

// get page content max width
// ignore option use in community page, which digest width is wider
// than content width
const getContentMaxWidth = (metric) => {
  return WIDTH[metric]?.CONTENT || WIDTH.COMMUNITY.CONTENT
}

// content offset for like article page
const getContentOffset = (metric) => {
  return WIDTH[metric]?.CONTENT_OFFSET || 0
}

// get page max width
const getLaptopMPadding = (metric) => {
  return WIDTH[metric]?.LAPTOP_M_PADDING || 0
}

// adapt the inner content with for each page
export const fitContentWidth = (metric = METRIC.COMMUNITY): string => {
  const laptopMmediaQuery = media.laptopM`
    padding-left: ${getLaptopMPadding(metric)};
    padding-right: ${getLaptopMPadding(metric)};
  `

  const desktopLmediaQuery = media.desktopL`
    margin-left: ${WIDTH[metric]?.CONTENT_OFFSET_DESKTOPL};
  `

  const laptopLmediaQuery = media.laptopL`
    margin-left: ${WIDTH[metric]?.CONTENT_OFFSET_LAPTOPL};
  `

  return `
    max-width: ${getContentMaxWidth(metric)};
    margin-left: ${getContentOffset(metric)};

    ${desktopLmediaQuery};
    ${laptopLmediaQuery};
    ${laptopMmediaQuery};
  `
}

// get page max width
export const fitPageWidth = (metric: string): string => {
  return `max-width: ${WIDTH[metric]?.PAGE || WIDTH.COMMUNITY.PAGE};`
}

// export const media = Object.keys(mediaBreakPoints).reduce((acc, label) => {
//   acc[label] = (...args) => styledCss`
//     @media (max-width: ${mediaBreakPoints[label]}px) {
//       ${styledCss(...args)};
//     }
//   `
//   return acc
// }, {})

// see @link https://github.com/styled-components/styled-components/issues/430#issuecomment-439016641
export const media = Object.keys(mediaBreakPoints).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    styledCss`
        @media (max-width: ${mediaBreakPoints[label]}px) {
          ${styledCss(literals, ...placeholders)};
        }
      `.join('')
  return acc
}, {} as Record<keyof typeof mediaBreakPoints, (l: TemplateStringsArray, ...p: any[]) => string>)
