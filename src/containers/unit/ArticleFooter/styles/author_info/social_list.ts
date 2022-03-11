import styled from 'styled-components'

import Img from '@/Img'
import css, { theme, animate } from '@/utils/css'

export const Wrapper = styled.article`
  ${css.flex('align-center')};
  margin-top: 1px;
`
export const CursorDivider = styled.div`
  background-color: #139c9e;
  margin-left: 12px;
  margin-right: 12px;
  width: 1px;
  height: 12px;
  margin-top: 1px;
  animation: ${animate.blink} 2s linear infinite alternate;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  margin-right: 8px;
`
