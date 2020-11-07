/*
 *
 * common styles used in styled-component
 *
 */
import { css as styledCss } from 'styled-components'

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
const circle = (width = '30px') => `
  width: ${width};
  height: ${width};
  border-radius: 100%;
  display: block;
`

const flexExpand = (rule) => {
  switch (rule) {
    case 'align-both':
      return 'align-items: center;justify-content: center;'

    case 'align-center':
      return 'align-items: center;'

    case 'align-start':
      return 'align-items: flex-start;'

    case 'align-end':
      return 'align-items: flex-end;'

    case 'align-baseline':
      return 'align-items: baseline;'

    case 'justify-center':
      return 'justify-content: center;'

    case 'justify-start':
      return 'justify-content: flex-start;'

    case 'justify-end':
      return 'justify-content: flex-end;'

    case 'justify-between':
      return 'justify-content: space-between;'

    case 'justify-around':
      return 'justify-content: space-around;'

    case 'justify-evenly':
      return 'justify-content: space-evenly;'

    default: {
      return ''
    }
  }
}
/*
 * flex opts sort order:
 * [flex-direction][align-items][flex-grow]
 */
const flexOpts = (rule1, rule2) => {
  return `${flexExpand(rule1)}${flexExpand(rule2)}`
}

const flex = (rule1, rule2 = '') => `
  display: flex;
  ${flexOpts(rule1, rule2)};
`
const flexGrow = (rule1, rule2 = '') => `
  ${flex(rule1, rule2)};
  flex-grow: 1;
`
const flexColumn = (rule1, rule2 = '') => `
  ${flex(rule1, rule2)};
  flex-direction: column;
`
const flexColumnGrow = (rule1, rule2 = '') => `
  ${flexColumn(rule1, rule2)};
  flex-grow: 1;
`

const zIndex = {
  header: 3,
  popover: 3000,
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
  // laptopL: '1440px',
  // desktop: '2560px'
}

const media = Object.keys(mediaBreakPoints).reduce((acc, label) => {
  acc[label] = (...args) => styledCss`
    @media (max-width: ${mediaBreakPoints[label]}px) {
      ${styledCss(...args)};
    }
  `
  return acc
}, {})

// left and right padding in laptopL for header, footer and certen content
media.laptopLPadding = '0 8vw 0 calc(7vw + 15px);'
media.laptopLPaddingColumnLayout = '0 3vw 0 calc(3vw + 10px);'

// export const media = generateMedia({ ...mediaBreakPoints })

const css = {
  cutFrom,
  circle,
  smokey,
  flex,
  flexGrow,
  flexColumn,
  flexColumnGrow,
  zIndex,
  mediaBreakPoints,
  media,
}

export default css
