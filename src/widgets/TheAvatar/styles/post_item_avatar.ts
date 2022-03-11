import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import { Tail as TailBase } from './index'

export const Wrapper = styled.div`
  cursor: pointer;
  ${css.circle(32)};
  position: relative;
  margin-top: 4px;
`
export const InnerShadow = styled.div`
  position: absolute;
  ${css.circle(30)};
  height: 31px;
  top: 0px;
  left: 0px;
  box-shadow: ${theme('avatar.shadow')};
  z-index: 2;
`
export const QuoteShadow = styled(InnerShadow)`
  ${css.circle(32)};
  top: 0;
  left: 0;
  box-shadow: ${theme('avatar.quoteShadow')};
`
export const Avatar = styled(Img)`
  ${css.circle(30)};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatar.opacity')};
`
export const QuoteAvatar = styled(Avatar)`
  ${css.circle(34)};
  margin-left: -2px;
  margin-top: -2px;
  border: 2px solid;
  border-color: ${theme('avatar.quote')};
`
export const MaskIcon = styled(Img)`
  position: absolute;
  bottom: -4px;
  left: -3px;
  ${css.size(22)};
  fill: #bd572b;
  z-index: 2;
`
export const Tail = styled(TailBase)`
  ${Wrapper}:hover & {
    left: -6px;
    transform: rotate(-18deg);
  }
`
