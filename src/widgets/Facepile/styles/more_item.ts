import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { pixelAdd } from '@/utils/dom'

import { Wrapper as BaseWrapper, AvatarsMore } from './index'
import { getAvatarSize } from './metric'

const BaseAvatarItem = styled.li<{ size: string }>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getAvatarSize(size)};
  z-index: 0;
  ${BaseWrapper}:hover & {
    margin-left: 0;
    z-index: 0;
  }
`
export const Wrapper = styled(BaseAvatarItem)`
  ${css.media.mobile`display: none`};
`
export const TextMore = styled(AvatarsMore)`
  font-size: 20px;
  padding-left: 4px;

  ${({ size }) => css.circle(pixelAdd(getAvatarSize(size) as string, -2))};
  ${css.flex('align-both')};
  margin-left: 1px;
`
export const DotText = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-top: -10px;
  letter-spacing: -1px;
  padding-right: 2px;
`
export const StateInfoWrapper = styled.div`
  width: 95px;
  padding: 8px 10px;
`
export const TotalCommentStateHint = styled.div`
  ${css.flex('justify-end')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  font-size: 12px;
`
export const Focus = styled.span`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-left: 4px;
`
