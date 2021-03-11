import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

import { Tail as TailBase } from './index'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  cursor: pointer;
  ${css.circle(38)};
  position: relative;
  margin-top: 2px;
`
export const InnerShadow = styled.div`
  position: absolute;
  ${css.circle(38)};
  top: -1px;
  left: -1px;
  box-shadow: ${theme('avatar.shadow')};
  z-index: 2;
`
export const QuoteShadow = styled(InnerShadow)`
  ${css.circle(34)};
  top: 2px;
  left: 2px;
  box-shadow: ${theme('avatar.quoteShadow')};
`
export const Avatar = styled(Img)`
  ${css.circle(36)};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatar.opacity')};
`
export const QuoteAvatar = styled(Avatar)`
  ${css.circle(38)};
  border: 2px solid;
  border-color: ${theme('avatar.quote')};
`
export const Tail = styled(TailBase)`
  ${Wrapper}:hover & {
    left: -6px;
    transform: rotate(-18deg);
  }
`
