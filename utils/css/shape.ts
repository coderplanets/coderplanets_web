import { isString } from '../validator'

export const circle = (width: string | number, displayBlock = true): string => {
  const theWidth = isString(width) ? width : `${width}px`

  return displayBlock
    ? `
    width: ${theWidth};
    min-width: ${theWidth};
    height: ${theWidth};
    min-height: ${theWidth};
    border-radius: 100%;
    display: block;
  `
    : `
  width: ${theWidth};
  min-width: ${theWidth};
  height: ${theWidth};
  min-height: ${theWidth};
  border-radius: 100%;
`
}

export const size = (width: string | number, displayBlock = true): string => {
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
