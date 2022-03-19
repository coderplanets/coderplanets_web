import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  overflow: hidden;
  margin-left: 20px;
  margin-right: 30px;
`
export const InfoWrapper = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 15px;
  margin-right: 15px;
`

export const ListsWrapper = styled.div`
  width: 80%px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`
export const UserLabel = styled.div`
  ${css.flex('align-center')};
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`
export const UserAvatar = styled(Img)`
  ${css.circle(24)};
  margin-right: 8px;
`
export const UserNickname = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: -2px;
  ${UserLabel}:hover & {
    color: ${theme('banner.title')};
  }
`
export const MessageLinker = styled.a`
  color: ${theme('thread.articleTitle')};
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`

export const Message = styled.div`
  ${css.flexColumn()};
  padding: 10px 15px;
  position: relative;
  &:hover {
    background: #113744;
  }
`
export const MessageDivider = styled.div`
  border-bottom: 1px solid;
  border-bottom-color: ${theme('banner.desc')};
  width: 100%;
  opacity: 0.3;
`
export const MessageHeader = styled.div`
  ${css.flex()};
`
export const MessageBody = styled.div``
export const TitleHeader = styled.div`
  ${css.flex('align-center')};
`
export const TypeLabel = styled.div`
  color: ${theme('thread.articleDigest')};
  background: ${theme('mailBox.headHightBg')};
  font-size: 0.85rem;
  margin-right: 3px;
`
export const SourceTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  ${css.cutRest('350px')};
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
  }
`
export const SourcePreview = styled.div`
  ${css.flex()};
  color: ${theme('thread.articleDigest')};
  font-size: 0.8rem;
  margin-top: 3px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`
export const PreviewBody = styled.div`
  flex-grow: 1;
  font-style: italic;
  ${css.cutRest('400px')};
`
export const AtLabel = styled.span`
  margin-left: 3px;
  font-style: normal;
`
export const FloorNum = styled.span`
  color: ${theme('comment.floor')};
  margin-right: 2px;
`
