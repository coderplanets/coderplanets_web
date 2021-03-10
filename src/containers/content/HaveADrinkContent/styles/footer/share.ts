import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-end')};
  width: 40%;
  color: ${theme('thread.articleDigest')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(20)};
  opacity: 0.8;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
