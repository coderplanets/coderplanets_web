import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${cs.flex('align-end', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  margin-left: 0;
  margin-bottom: 3px;
`
export const AvatarWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled(Img)`
  ${cs.circle('18px')};
  fill: ${theme('thread.articleTitle')};
  opacity: ${theme('avatarOpacity')};
  display: block;
  margin-top: 2px;
  margin-right: 6px;
`
export const AvatarFallback = styled.div`
  ${cs.flex('align-both')};
  ${cs.circle('18px')};
  font-size: 14px;
  color: ${theme('thread.articleTitle')};
  background-color: #164858; /*${theme('thread.articleHover')}; */
  margin-top: 0;
  margin-right: 6px;
`
export const AuthorInfo = styled.div`
  ${cs.flex('align-center')};
`
export const TimeStamp = styled.div`
  font-size: 12px;
  margin-top: 2px;
`
export const Brief = styled.div`
  ${cs.flexGrow('align-center')};
  margin-bottom: 10px;
  color: ${theme('thread.articleTitle')};
  &:hover {
    cursor: pointer;
  }
`
export const TagListWrapper = styled.div`
  margin-right: -3px;
`
