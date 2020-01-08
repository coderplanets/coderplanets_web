import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-both')};
  color: ${theme('thread.articleTitle')};
  justify-content: start;
  margin-right: 15px;
`

export const Icon = styled(Img)`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};
  display: block;
  width: 18px;
  height: 18px;

  ${cs.smokey};
`
