/*
 *
 * common styles used in styled-component
 *
*/

export const smokey = `
  opacity: 0.6;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  transition: opacity 0.3s;
`

export const column = `
  display: flex;
  flex-direction: column;
`

export const columnCenter = `
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const truncate = (width = '100px') => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const cs = {
  truncate,
  smokey,
}
