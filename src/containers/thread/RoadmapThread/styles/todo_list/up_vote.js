import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-start')};
  color: ${theme('thread.articleTitle')};
  width: 32px;
`
export const Icon = styled(Img)`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};

  ${css.size(18)};

  ${css.smokey};
`
