import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-start')};
  color: ${theme('thread.articleTitle')};
  width: 32px;
`
export const Icon = styled(Img)<{ viewerDid: boolean }>`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};

  ${css.size(18)};

  ${css.smokey()};
`
