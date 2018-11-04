/*
 *
 * common styles used in styled-component
 *
 */

const smokey = `
  opacity: 0.6;

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

const cs = {
  truncate,
  circle,
  smokey,
}

export default cs
