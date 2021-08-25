/*
 *
 * common styles used in styled-component
 *
 */
import { css as styledCss, CSSProp } from 'styled-components'

import { theme } from '../themes'

import { mediaBreakPoints } from './metric'
import { media, fitContentWidth, fitStickerWidth, fitPageWidth } from './media'
import { flex, flexGrow, flexColumn, flexColumnGrow } from './flex'

import { circle, size } from './shape'
import zIndex from './zindex'

const smokey = (initOpacity = 0.6): string => `
  opacity: ${initOpacity};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.2s;
`
const cutRest = (width = '100px'): string => `
  max-width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const threadTitleHover = (): CSSProp => {
  return styledCss`
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    text-decoration-color: ${theme('thread.articleDigest')};
    cursor: pointer;
  `
}

const css = {
  cutRest,
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
  fitStickerWidth,
  fitPageWidth,
  threadTitleHover,
}

export default css
