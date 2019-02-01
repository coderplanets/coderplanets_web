/*
 *
 * common styles used in styled-component
 *
 */

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

  //
  sidebar: 1999,
}

const cs = {
  truncate,
  circle,
  smokey,
  flex,
  flexGrow,
  flexColumn,
  flexColumnGrow,
  zIndex,
}

export default cs
