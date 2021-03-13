import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center', 'justify-start')};
  color: ${theme('thread.articleTitle')};
  margin-right: 15px;

  ${css.media.mobile`
    margin-right: 10px;
    margin-right: 5px;
    margin-top: 6px;
  `};
`
export const Icon = styled(Img)<{ viewerDid: boolean }>`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};

  ${css.size(18)};
  ${css.smokey()};

  ${css.media.mobile`
    ${css.size(15)};
  `};
`
