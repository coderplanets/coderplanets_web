import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import Img from '@/Img'

import { ReplyBarBase, ReplyToBodyBase, ReplyToFloorBase } from './base'

export const Wrapper = styled(ReplyBarBase)`
  margin-left: -2px;

  ${css.media.mobile`
    margin: 4px 0;
    padding: 5px 3px;
  `};
`
export const Avatar = styled(Img)`
  ${css.circle(14)};
  margin-left: 5px;
  margin-right: 5px;
`
export const ReplyIcon = styled(Img)`
  fill: ${theme('comment.username')};
  ${css.size(15)};
  margin-right: 3px;
  margin-top: 2px;
`
export const ReplyToBody = styled(ReplyToBodyBase)`
  ${css.media.mobile`
    font-size: 12px;
    margin-top: 3px;
  `};
`
export const ReplyToFloor = styled(ReplyToFloorBase)`
  ${css.media.mobile`
    font-size: 12px;
    opacity: 0.8;
    margin-top: 2px;
  `};
`
