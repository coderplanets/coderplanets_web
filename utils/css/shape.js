import { isString } from '../validator'

export const circle = (width = '30px', displayBlock = true) => {
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

export const size = (width = '30px', displayBlock = true) => {
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
