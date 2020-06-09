import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils'

const getSize = (size) => {
  switch (size) {
    case 'small':
      return '28px'

    case 'large':
      return '150px'

    case 'huge':
      return '300px'

    default:
      return '38px'
  }
}

const getColor = (color) => {
  switch (color) {
    case 'red':
      return theme('baseColor.error')

    case 'green':
      return theme('baseColor.green')

    default:
      return '#003743'
  }
}

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 240px;
  /* z-index: 1; */
`
export const Icon = styled(Img)`
  position: absolute;
  z-index: 1;
  fill: ${({ color }) => getColor(color)};
  top: ${({ top }) => top || '10%'};
  left: ${({ left }) => left || '10%'};

  background: block;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  transform: ${({ rotate }) => `rotate(${rotate})` || 'rotate(0deg)'};
  opacity: ${({ opacity }) => opacity || 1};
`
