import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(13)};

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: fill 0.2s;
`
export const Text = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  margin-left: 6px;

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
