import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs, animate } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  margin-left: 5px;
`
export const ErrorIcon = styled(Img)`
  fill: ${theme('baseColor.error')};
  width: 40px;
  height: 40px;
  display: block;
  margin-right: 8px;
  animation: ${animate.breathRule};
`
export const Info = styled.div`
  ${cs.flexColumn()};
`
// color: ${theme('thread.articleTitle')};
export const Title = styled.div`
  color: ${theme('baseColor.error')};
`
// color: ${theme('thread.articleDigest')};
export const Desc = styled.div`
  color: ${theme('baseColor.error')};
  opacity: 0.6;
`
