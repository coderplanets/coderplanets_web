import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { Tail as TailBase } from './index'

export const Wrapper = styled.div`
  cursor: pointer;
  ${css.size(36)};
  position: relative;
`
export const Avatar = styled(Img)`
  ${css.circle(36)};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatar.opacity')};
`
export const Tail = styled(TailBase)`
  ${Wrapper}:hover & {
    left: -6px;
    transform: rotate(-18deg);
  }
`
