import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { Wrapper as BaseWrapper, AvatarsMore } from './index'
import { getAvatarSize, getMoreTextWidth } from './metric'

const BaseAvatarItem = styled.li<{ size: string }>`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: ${({ size }) => getAvatarSize(size)};
  opacity: 1;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
  ${BaseWrapper}:hover & {
    margin-left: 0;
  }
`
export const Wrapper = styled(BaseAvatarItem)`
  ${css.media.mobile`display: none`};
`

type TNumbersMore = { size: string; total: number }
export const NumbersMore = styled(AvatarsMore)<TNumbersMore>`
  background: #123d4c;
  color: ${theme('thread.articleTitle')};
  height: ${({ size }) => getAvatarSize(size)};
  width: ${({ total }) => getMoreTextWidth(total)};
  font-weight: 400;
  padding-left: 2px;
  margin-left: 4px;
  border-radius: 0 10px 10px 0;
`
export const TextMore = styled(AvatarsMore)`
  font-size: 20px;
  padding-left: 4px;
`
export const DotText = styled.div`
  margin-top: -8px;
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
