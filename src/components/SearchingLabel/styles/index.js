import styled from 'styled-components'

import { theme, css, animate } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const LoadingIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  width: 26px;
  height: 26px;
  animation: ${animate.rotate360} 1s linear infinite;
  display: block;
  margin-right: 3px;
`
export const LoadingText = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
