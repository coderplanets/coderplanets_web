import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import ViewSVG from '@/icons/View'
import CommentSVG from '@/icons/Comment'

export const Wrapper = styled.div``
export const CommunityLabel = styled.div`
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
export const Extra = styled.li`
  ${css.flex('align-center')};
  margin-top: 5px;
  margin-bottom: 4px;
  transition: opacity 0.2s;
  font-size: 13px;
  color: ${theme('thread.extraInfo')};
`
export const UpvotesWrapper = styled.div`
  transform: scale(0.9);
`
export const ViewIcon = styled(ViewSVG)`
  ${css.size(10)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 4px;
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(8)};
  fill: ${theme('thread.extraInfo')};
  margin-right: 6px;
`
export const BasicState = styled.div`
  ${css.flex('align-center')};
  font-size: 12px;
  color: ${theme('thread.extraInfo')};
`
export const BodyDigest = styled.li`
  color: ${theme('thread.articleDigest')};
  white-space: normal;
  display: block;
  font-size: 12px;
  max-width: 96%;
`
export const PublishLabel = styled.span`
  display: inline;
  ${css.media.mobile`
    display: none;
    margin-left: 3px;
  `};
`
