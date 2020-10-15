import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  margin-top: -10px;
`
export const CommunityInfo = styled.div`
  color: ${theme('thread.articleTitle')};
  background: #133f4e;
  font-size: 11px;
  border-radius: 5px;
  padding: 0 5px;
  margin-bottom: 1px;
  margin-left: -4px;
`
export const Extra = styled.li`
  ${css.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 4px;
  transition: opacity 0.2s;
  font-size: 13px;
  color: ${theme('thread.extraInfo')};
`
export const ExtraIcon = styled(Img)`
  fill: #28a49b;
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 4px;
  opacity: 0.8;
`
export const ExtraTexts = styled.div`
  ${css.flex('align-center')};
  opacity: 0.7;
`
export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  white-space: normal;
  display: block;
  font-size: 12px;
  max-width: 96%;
`
export const CommentWrapper = styled.div`
  ${css.flex('align-center')};
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
  ${css.media.mobile`
    display: none;
    margin-left: 3px;
  `};
`
