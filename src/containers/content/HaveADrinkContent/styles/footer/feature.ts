import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')}
  width: 20%;
  padding-left: 6px;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  display: block;
  ${css.size(18)};
  opacity: 0.8;

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
