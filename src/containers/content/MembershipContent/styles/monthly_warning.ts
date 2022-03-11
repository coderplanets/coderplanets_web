import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  position: absolute;
  ${css.flex('align-center')};
  color: ${theme('thread.articleTitle')};
  top: 1px;
  right: -150px;
  font-size: 14px;
`
export const UpIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(16)};
  margin-left: 5px;
  margin-right: 5px;
  transform: rotate(-15deg);
`
export const Number = styled.div`
  color: ${theme('baseColor.red')};
  font-weight: bold;
  font-size: 16px;
`
