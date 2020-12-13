/*
 *
 * common styles used in styled-component
 *
 */
import { css as styledCss } from 'styled-components'

import { theme } from '../themes'

import { media, mediaBreakPoints, fitContentWidth, fitPageWidth } from './media'
import { flex, flexGrow, flexColumn, flexColumnGrow } from './flex'

import { circle, size } from './shape'
import zIndex from './zindex'

const smokey = (initOpacity = 0.6) => `
  opacity: ${initOpacity};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.2s;
`
const cutFrom = (width = '100px') => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const threadTitleHover = () => {
  return styledCss`
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    text-decoration-color: ${theme('thread.articleDigest')};
    cursor: pointer;
  `
}

const css = {
  cutFrom,
  circle,
  size,
  smokey,
  flex,
  flexGrow,
  flexColumn,
  flexColumnGrow,
  zIndex,
  mediaBreakPoints,
  media,
  fitContentWidth,
  fitPageWidth,
  threadTitleHover,
}

export default css
