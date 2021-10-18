import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  height: 50px;
  margin-left: 10px;
`
export const ExpandWrapper = styled(Wrapper)`
  margin-left: 0;
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
`
export const LeaveResponseUsername = styled.div`
  color: ${theme('comment.username')};
  font-size: 16px;
  margin-left: 12px;
  margin-right: 10px;
`
export const RefUsersWrapper = styled.div`
  ${css.flex('align-center')};
`
export const AtSignIcon = styled(Img)`
  fill: ${theme('comment.username')};
  ${css.size(15)};
  margin-right: 5px;
`
export const RefUserList = styled.div`
  margin-top: -10px;
`
