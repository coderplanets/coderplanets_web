import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'
import DotDivider from '@/components/DotDivider'

export const Wrapper = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`
export const Extra = styled.li`
  ${css.flex('align-center')};
  color: ${theme('thread.extraInfo')};
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 1px;
`
export const AuthorName = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
`
export const PublishTime = styled.div`
  font-size: 12px;
`
export const Dot = styled(DotDivider)`
  background: ${theme('thread.extraInfo')};
  margin-right: 8px;
`
export const ItemWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 10px;
`
export const ViewsIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  width: 12px;
  height: 12px;
  display: block;
  opacity: 0.6;
  margin-right: 3px;
`

export const Digest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 13px;
  max-width: 85%;

  &:hover {
    color: #687e82;
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const PreviewWrapper = styled.div`
  display: inline-flex;
  opacity: 0;
  margin-left: 8px;
  align-items: center;

  ${Wrapper}:hover & {
    opacity: 0.6;
  }
  transition: opacity 0.25s;
`
export const PreviewIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  height: 14px;
  width: 14px;
  display: block;
  transform: rotate(180deg);
`
export const PreviewText = styled.span`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
  margin-right: 5px;
`
