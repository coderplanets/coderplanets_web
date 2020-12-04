/*
 *
 * common styles used in styled-component
 *
 */
import { css as styledCss } from 'styled-components'

import { theme } from '../themes'
import { isString } from '../validator'

import { media, mediaBreakPoints, fitInnerWidth, fitPageWidth } from './media'
import { flex, flexGrow, flexColumn, flexColumnGrow } from './flex'

const smokey = (opt = 0.6) => `
  opacity: ${opt};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`
const cutFrom = (width = '100px') => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const circle = (width = '30px', displayBlock = true) => {
  const theWidth = isString(width) ? width : `${width}px`

  return displayBlock
    ? `
    width: ${theWidth};
    height: ${theWidth};
    border-radius: 100%;
    display: block;
  `
    : `
  width: ${theWidth};
  height: ${theWidth};
  border-radius: 100%;
`
}

const size = (width = '30px', displayBlock = true) => {
  const theWidth = isString(width) ? width : `${width}px`

  return displayBlock
    ? `
    width: ${theWidth};
    height: ${theWidth};
    display: block;
  `
    : `
    width: ${theWidth};
    height: ${theWidth};
  `
}

const threadTitleHover = () => {
  return styledCss`
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    text-decoration-color: ${theme('thread.articleDigest')};
    cursor: pointer;
  `
}

const zIndex = {
  header: 3,
  popover: 2000,
  modalOverlay: 2500,
  drawerOverlay: 2000,
  drawer: 2001,
  modeLine: 2002,
  doraemonOverlay: 2600,
  doraemon: 2601,
  modalCloseBtn: 2000,

  //
  sidebar: 1999,
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
  fitInnerWidth,
  fitPageWidth,
  threadTitleHover,
}

export default css
