import styled from 'styled-components'

import type { TActive, TSpace } from '@/spec'
import Img from '@/Img'
import { theme, css, animate } from '@/utils'

export const Wrapper = styled.div<TActive>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  /* margin-left: -38px; */
`
export const ItemWrapper = styled.div`
  ${css.flexColumn('align-both')};
  position: relative;
  width: 100%;
`
export const ItemHint = styled.div<TSpace>`
  color: ${theme('thread.articleDigest')};
  position: absolute;
  right: ${({ right }) => `${right}px` || '-12px'};
  bottom: ${({ bottom }) => `${bottom}px` || 0};
  font-size: 12px;
  opacity: 0;

  ${ItemWrapper}:hover & {
    opacity: 1;
  }

  transition: all 0.25s;
  transition-delay: 0.5s;
`
const Icon = styled(Img)`
  ${css.size(22)};
  transition: all 0.25s;
  cursor: pointer;
`

export const LikeIcon = styled(Icon)`
  fill: #0c5473;
  ${css.size(22)};

  &:hover {
    fill: ${theme('baseColor.red')};
    animation: ${animate.pulse} 0.25s linear;
  }
`
export const CollectIcon = styled(Icon)`
  fill: #0c5473;
  margin-left: 1px;

  &:hover {
    fill: #107eae;
    cursor: pointer;
  }
`
export const ShareIcon = styled(Icon)`
  fill: #0c5473;
  ${css.size(16)};
  margin-left: -1px;
`
export const Number = styled.div`
  ${css.flex('align-baseline')};
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  margin-top: 5px;
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
`
