import styled from 'styled-components'

import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexGrow('align-center')}
  justify-content: center;
  width: 20%;
  padding-left: 6px;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: block;
  width: 18px;
  height: 18px;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
