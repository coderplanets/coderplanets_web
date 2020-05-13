import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center', 'justify-start')};
  color: ${theme('thread.articleTitle')};
  width: 32px;
`
export const Icon = styled(Img)`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};
  display: block;
  width: 18px;
  height: 18px;

  ${cs.smokey};
`
