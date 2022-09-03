/* eslint-disable @typescript-eslint/no-explicit-any */
import { css as styledCss } from 'styled-components'

import type { TMetric } from '@/spec'
import { METRIC } from '../constant'
import { WIDTH, mediaBreakPoints } from './metric'

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

// fit article sticker width
export const fitStickerWidth = (metric = METRIC.ARTICLE): string => {
  // const laptopMmediaQuery = media.laptopM`
  // `
  // const desktopLmediaQuery = media.desktopL`
  // `
  const laptopLmediaQuery = media.laptopL`
    width: ${WIDTH[metric].STICKER_LAPTOPL};
  `
  return `
    width: ${WIDTH[metric].STICKER};
    ${laptopLmediaQuery};
  `
  // ${desktopLmediaQuery};
  // ${laptopLmediaQuery};
  // ${laptopMmediaQuery};
}

// get page max width
export const fitPageWidth = (metric: TMetric): string => {
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
