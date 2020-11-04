import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils'

export const Wrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 42%;
  right: -30px;

  width: 30px;
  height: 120px;
  cursor: pointer;
`
export const Shape = styled(Img)`
  fill: ${theme('sidebar.bg')};
  width: 120px;
  height: 40px;
  position: absolute;
  top: 38px;
  left: -48px;
  transform: rotate(90deg);
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 24px;
  height: 24px;
  z-index: 1;
  position: absolute;
  top: 44px;
  left: 0;
  display: block;
`
