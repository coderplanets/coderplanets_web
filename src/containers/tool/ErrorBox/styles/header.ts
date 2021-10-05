import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'

export const Wrapper = styled.div`
  ${css.flex()};
  padding: 15px 22px;
`
export const ErrorIcon = styled(Img)`
  fill: ${theme('baseColor.red')};
  ${css.size(40)};
  margin-right: 15px;
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
