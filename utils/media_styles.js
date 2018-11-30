/*
   see: https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488
 */
import { css } from 'styled-components'

export const MEDIA_MAX_WIDTH = '1500px'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})
