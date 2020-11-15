import styled from 'styled-components'

import Img from '@/Img'
import { theme, css, animate } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-left: 5px;
`
export const ErrorIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(40)};
  display: block;
  margin-right: 8px;
  animation: ${animate.breath} 1.5s linear infinite;
`
export const Info = styled.div`
  ${css.flexColumn()};
`
// color: ${theme('thread.articleTitle')};
export const Title = styled.div`
  color: ${theme('baseColor.red')};
`
// color: ${theme('thread.articleDigest')};
export const Desc = styled.div`
  color: ${theme('baseColor.red')};
  opacity: 0.6;
`
