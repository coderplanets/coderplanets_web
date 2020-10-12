import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const Extra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 13px;
  color: ${theme('thread.extraInfo')};
`
export const CommentsDigest = styled.span`
  display: none;

  ${cs.media.mobile`
   display: inline;
    margin-left: 3px;
  `};
`
export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 13px;
  max-width: 85%;

  ${cs.media.mobile`
    ${cs.cutFrom('250px')};
`};
`
export const CommentWrapper = styled.div`
  ${cs.flex('align-center')};
  align-self: flex-start;
`
export const CommentIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 14px;
  height: 14px;
  margin-right: 4px;
  display: block;
`
export const CommentNum = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const PublishLabel = styled.span`
  display: inline;
  ${cs.media.mobile`
    display: none;
    margin-left: 3px;
  `};
`
