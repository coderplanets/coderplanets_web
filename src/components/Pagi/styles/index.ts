import styled from 'styled-components'

import { TSpace } from '@/types'
import Img from '@/Img'
import { css, theme } from '@/utils'

type TMargin = {
  margin: TSpace
}
export const Wrapper = styled.div<TMargin>`
  ${css.flex('align-center', 'justify-between')};
  color: #196780;
  height: 60px;
  width: 100%;
  margin-top: ${({ margin: { top } }) => top};
  margin-bottom: ${({ margin: { bottom } }) => bottom};
  margin-left: ${({ margin: { left } }) => left};
  margin-right: ${({ margin: { right } }) => right};
`
export const EmptyWrapper = styled(Wrapper)`
  ${css.flex('align-both')};
`
export const BottomMsg = styled.div`
  font-size: 1.1rem;
  color: ${theme('thread.articleDigest')};
  opacity: 0.7;
  &:before {
    content: '~~';
    margin-right: 10px;
  }
  &:after {
    content: '~~';
    margin-left: 10px;
  }
`
export const CommonCenterArrowIcon = styled(Img)`
  fill: #196780;
  ${css.size(30)};
  transition: all 0.25s;
`
export const CommonBottomArrowIcon = styled(Img)`
  fill: #196780;
  ${css.size(16)};
  margin-bottom: 3px;
`
export const CommonNavi = styled.div`
  font-size: 18px;
  color: #327faf;

  &:hover {
    font-weight: bold;
  }

  ${css.media.mobile`
    font-size: 14px;
  `};
`
export const CommonHint = styled.div`
  font-size: 12px;
  margin-bottom: 2px;
`
