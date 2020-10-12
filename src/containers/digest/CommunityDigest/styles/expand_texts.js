import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

export const Wrapper = styled.div`
  /* ${cs.flex('align-center')}; */
  /* align-items: ${({ descExpand }) =>
    descExpand ? 'flex-start' : 'center'}; */
`
export const Normal = styled.div`
  color: ${theme('banner.desc')};
  font-size: 14px;
  max-width: 490px;
  margin: ${({ margin }) => (margin ? '10px 0' : 0)};

  ${cs.media.mobile`
    font-size: 13px;
  `};

  /* ${cs.media.tablet`
    ${cs.cutFrom('220px')};
  `};

  ${cs.media.mobile`
    ${cs.cutFrom('180px')};
  `}; */
`
export const IconWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  margin-left: 6px;
`
export const MoreIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 15px;
  height: 15px;
  display: inline-block;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    color: ${theme('banner.title')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const UpWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  cursor: pointer;
  opacity: 0.8;
  margin-left: 12px;

  &:hover {
    color: ${theme('banner.title')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const IconWithTextWrapper = styled.div`
  ${cs.flex('align-both')};
`
export const UpIcon = styled(Img)`
  fill: #2cb4aa;
  width: 15px;
  height: 15px;
  display: block;
  margin-right: 3px;
`
export const UpText = styled.div`
  color: #2cb4aa;
  font-size: 13px;
`
