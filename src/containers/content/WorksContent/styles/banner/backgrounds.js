import styled from 'styled-components'

import Img from '@/Img'
// import { cs, theme } from '@/utils'

const getSize = size => {
  switch (size) {
    case 'small':
      return '28px'

    case 'large':
      return '60px'

    default:
      return '38px'
  }
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`
export const Icon = styled(Img)`
  fill: #003743;
  position: absolute;
  top: ${({ top }) => top || '10%'};
  left: ${({ left }) => left || '10%'};

  background: block;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  transform: ${({ rotate }) => `rotate(${rotate})` || 'rotate(0deg)'};
`
