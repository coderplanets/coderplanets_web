import styled from 'styled-components'

import Img from '@Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')}
  width: 20%;
  padding-left: 6px;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: block;
  width: 18px;
  height: 18px;
  opacity: 0.8;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
