import styled from 'styled-components'

import Img from 'components/Img'
import { theme, cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
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
  width: 16px;
  height: 16px;
  display: block;
  margin-right: 3px;
  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  &:hover {
    cursor: pointer;
  }
`
