import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import ViewedSVG from '@/icons/article/Viewed'
import DotDivider from '@/widgets/DotDivider'

export const Wrapper = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const Extra = styled.li`
  position: relative;
  ${css.flex('align-end')};
  color: ${theme('thread.extraInfo')};
  margin-top: 3px;
  font-size: 12px;
`
export const LeftPart = styled.div`
  ${css.flex('align-center')};
`

export const CommunityLabel = styled.div`
  color: inherit;
  padding-left: 14px;
  position: relative;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    left: 1px;
    top: 3px;
    width: 6px;
    height: 11px;
    border-radius: 4px;
    background-color: #49a5a0;
  }
`
export const LabelDivider = styled.div`
  width: 1px;
  height: 8px;
  margin-left: 10px;
  margin-right: 12px;
  background-color: ${theme('thread.articleDigest')};
  transform: rotate(12deg);
`
export const AuthorName = styled.a<{ darker: boolean }>`
  display: block;
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
  margin-bottom: 1px;

  text-decoration: none;

  &:hover {
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
    cursor: pointer;
  }
`
export const PublishTime = styled.div`
  font-size: 12px;
`
export const Dot = styled(DotDivider)`
  background-color: ${theme('thread.articleDigest')};
  margin-right: 8px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
`
export const ViewsIcon = styled(ViewedSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(12)};
  margin-right: 3px;
`

export const GTDBadgeWrapper = styled.div`
  position: absolute;
  top: 44px;
  right: -2px;
`
