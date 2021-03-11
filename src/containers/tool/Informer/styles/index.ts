import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
  margin-right: 3px;
  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  &:hover {
    cursor: pointer;
  }
`
