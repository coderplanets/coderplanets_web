import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

/* ${css.flex('align-center')}; */
/* align-items: ${({ descExpand }) =>
    descExpand ? 'flex-start' : 'center'}; */
export const Wrapper = styled.div``
export const Normal = styled.div<{ margin: string }>`
  color: ${theme('banner.desc')};
  font-size: 14px;
  max-width: 490px;
  margin: ${({ margin }) => (margin ? '10px 0' : 0)};

  ${css.media.mobile`
    font-size: 13px;
  `};

  /* ${css.media.tablet`
    ${css.cutRest('220px')};
  `};

  ${css.media.mobile`
    ${css.cutRest('180px')};
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
  ${css.flex('align-both')};
`
export const UpIcon = styled(Img)`
  fill: #2cb4aa;
  ${css.size(15)};
  margin-right: 3px;
`
export const UpText = styled.div`
  color: #2cb4aa;
  font-size: 13px;
`
