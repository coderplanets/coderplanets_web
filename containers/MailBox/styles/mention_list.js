import styled from 'styled-components'

import Img from '../../../components/Img'
import { cs, theme } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
`
export const UserLabel = styled.div`
  ${cs.flex('align-center')};
`
export const UserAvatar = styled(Img)`
  ${cs.circle('16px')};
  display: block;
  margin-right: 3px;
`
export const UserNickname = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: -2px;
`
export const Message = styled.div`
  ${cs.flexColumn()};
  padding: 6px 5px;
  &:hover {
    background: ${theme('thread.articleHover')};
  }
`
export const MessageDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 100%;
  opacity: 0.3;
`
export const MessageHeader = styled.div`
  ${cs.flex()};
`
export const MessageBody = styled.div``
export const TitleHeader = styled.div`
  ${cs.flex('align-center')};
`
export const TypeLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  background: ${theme('mailBox.headHightBg')};
  font-size: 0.85rem;
  margin-right: 3px;
`
export const SourceTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
  ${cs.truncate('180px')};
`
export const SourcePreview = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 3px;
`
export const AtLabel = styled.span`
  margin-left: 3px;
  font-style: normal;
`
