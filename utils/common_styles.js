/*
 *
 * common styles used in styled-component
 *
 */
import { css } from 'styled-components'

const smokey = (opt = 0.6) => `
  opacity: ${opt};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`
const truncate = (width = '100px') => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const circle = (width = '30px') => `
  width: ${width};
  height: ${width};
  border-radius: 100%;
`

/*
 * flex opts sort order:
 * [flex-direction][align-items][flex-grow]
 */
const flexOpts = opt => {
  switch (opt) {
    case 'align-both':
      return 'align-items: center;justify-content: center;'

    case 'align-center':
      return 'align-items: center;'

    case 'align-start':
      return 'align-items: flex-start;'

    case 'align-end':
      return 'align-items: flex-end;'

    case 'justify-center':
      return 'justify-content: center;'

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

const flex = opt => `
  display: flex;
  ${flexOpts(opt)};
`
const flexGrow = opt => `
  ${flex(opt)};
  flex-grow: 1;
`
const flexColumn = opt => `
  ${flex(opt)};
  flex-direction: column;
`
const flexColumnGrow = opt => `
  ${flexColumn(opt)};
  flex-grow: 1;
`

const zIndex = {
  popover: 3000,
  modalOverlay: 2500,
  previewOverlay: 2000,
  preview: 2001,
  doraemonOverlay: 2600,
  doraemon: 2601,
  modalCloseBtn: 2000,

  //
  sidebar: 1999,
}

export const MAX_CONTENT_WIDTH = '1520px'
export const mediaBreakPoints = {
  // mobileS: '320px',
  // mobileM: '375px',
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1600,
  // currently used as forms of preview content (slideout/modal)
  desktopL: 1920,
  // laptopL: '1440px',
  // desktop: '2560px'
}

const media = Object.keys(mediaBreakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaBreakPoints[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

// export const media = generateMedia({ ...mediaBreakPoints })

const cs = {
  truncate,
  circle,
  smokey,
  flex,
  flexGrow,
  flexColumn,
  flexColumnGrow,
  zIndex,
  mediaBreakPoints,
  media,
  MAX_CONTENT_WIDTH,
}

export default cs
