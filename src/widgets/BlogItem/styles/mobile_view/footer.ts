import styled from 'styled-components'

import css, { theme } from '@/utils/css'
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
export const CommunityLabel = styled.a`
  color: inherit;
  padding-left: 14px;
  position: relative;
  font-weight: bold;
  opacity: 0.8;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  transition: opacity 0.2s;

  &:before {
    content: '';
    position: absolute;
    left: 1px;
    top: 4px;
    width: 6px;
    height: 11px;
    border-radius: 4px;
    background-color: #49a5a0;
  }
`
export const ExtraIcon = styled(Img)`
  ${css.size(15)};
  fill: #28a49b;
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
  ${css.size(14)};
  margin-right: 4px;
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
