import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  overflow: hidden;
`
export const ListsWrapper = styled.div`
  width: 340px;
`
export const UserLabel = styled.div`
  ${css.flex('align-center')};

  &:hover {
    cursor: pointer;
  }
`
export const UserAvatar = styled(Img)`
  ${css.circle(16)};
  margin-right: 3px;
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
  padding: 6px 5px;
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
  ${css.cutRest('180px')};
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
  &:hover {
    cursor: pointer;
  }
`
export const PreviewBody = styled.div`
  font-style: italic;
  ${css.cutRest('250px')};
`
export const AtLabel = styled.span`
  font-style: normal;
`

export const FloorNum = styled.span`
  color: ${theme('comment.floor')};
  margin-right: 2px;
`
