import styled from 'styled-components'

import { theme, animate, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-both')};

  position: relative;
  width: 100%;
  min-height: 400px;
  background: #000000;
  &:hover {
    cursor: pointer;
  }
`
export const PosterImage = styled(Img)`
  width: 80%;
  height: auto;
  max-height: 400px;
`
export const PlayIcon = styled(Img)`
  position: absolute;
  fill: ${theme('cover')};
  width: 80px;
  height: 80px;
  top: 35%;
  left: 45%;
  opacity: 0;
  ${Wrapper}:hover & {
    animation: ${animate.zoomIn} 0.2s linear;
    opacity: 1;
    cursor: pointer;
  }
`
