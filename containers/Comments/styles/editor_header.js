import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  height: 60px;
  margin-right: 20px;
`
export const UserAvatar = styled.img`
  ${cs.circle('36px')};
  fill: ${theme('thread.articleTitle')};
  margin-left: 4%;
  opacity: ${theme('avatarOpacity')};
`
export const LeaveResponseText = styled.div`
  font-size: 1.1rem;
  margin-left: 15px;
  color: ${theme('comment.placeholder')};
`
export const LeaveResponseUsername = styled.div`
  font-size: 1.1rem;
  margin-left: 12px;
  margin-right: 10px;
  color: ${theme('comment.username')};
`

export const RefUsersWrapper = styled.div`
  ${cs.flex('align-center')};
`
export const AtSignIcon = styled(Img)`
  fill: ${theme('comment.username')};
  width: 15px;
  height: 15px;
  margin-right: 5px;
  display: block;
`

export const RefUserList = styled.div`
  margin-top: -10px;
`
