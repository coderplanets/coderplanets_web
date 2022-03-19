import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme, animate } from '@/utils/css'
import Img from '@/Img'

export const Wrapper = styled.div`
  margin-top: 10px;
`
export const Label = styled.div`
  ${css.flex()};
`
export const Title = styled.div`
  /* color: ${theme('tabs.headerActive')}; */
  color: ${theme('thread.articleDigest')};
  font-size: 0.9rem;
  flex-grow: 1;
`
export const AddonWrapper = styled.div<TActive>`
  margin-right: 5%;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  &:active {
    animation: ${animate.pulse} 0.4s linear;
  }
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  margin-top: 12px;
  margin-bottom: 15px;
  width: 100%;
  opacity: 0.3;
`
export const LabelIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  /* fill: ${theme('tabs.headerActive')}; */
  ${css.size(18)}
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 2px;
`

export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  /* color: ${theme('banner.desc')}; */
  opacity: 0.8;
  font-size: 14px;
  margin-bottom: 18px;
  margin-left: 3px;
`
