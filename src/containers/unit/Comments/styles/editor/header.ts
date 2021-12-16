import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import PublishSVG from '@/icons/EditPen'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  height: 50px;
  margin-left: 10px;
  border: 1px solid transparent;

  cursor: pointer;
`
export const ExpandWrapper = styled.div`
  ${css.flex('align-center')};
  height: 60px;
  margin-left: 0;
  position: relative;
`
export const HintText = styled.div`
  position: absolute;
  top: -25px;
  left: 3px;
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`
export const UserAvatar = styled(Img)`
  ${css.circle(20)};
  fill: ${theme('thread.articleTitle')};
  margin-left: 4%;
  opacity: ${theme('avatar.opacity')};
`
export const LeaveResponseText = styled.div`
  font-size: 14px;
  margin-left: 15px;
  color: ${theme('comment.placeholder')};

  ${Wrapper}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
export const LeaveResponseUsername = styled.div`
  color: ${theme('comment.username')};
  font-size: 16px;
  margin-left: 12px;
  margin-right: 10px;
`
export const PenIcon = styled(PublishSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
  margin-right: 14px;

  ${Wrapper}:hover & {
    fill: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
