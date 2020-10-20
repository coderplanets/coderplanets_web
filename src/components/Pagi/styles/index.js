import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
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
  width: 30px;
  height: 30px;
  display: block;
  transition: all 0.25s;
`
export const CommonBottomArrowIcon = styled(Img)`
  fill: #196780;
  width: 16px;
  height: 16px;
  display: block;
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
