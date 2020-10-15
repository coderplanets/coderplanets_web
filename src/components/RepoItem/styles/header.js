import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flexGrow()};
  margin-left: 10px;
`
export const Title = styled.div`
  ${css.flexGrow('align-center')};

  margin-bottom: 10px;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`
export const LangDot = styled.div`
  ${css.circle('12px')};
  background-color: ${({ color }) => color};
  margin-right: 6px;
`
export const PopoverInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`
export const Owner = styled.div`
  color: ${theme('thread.repoTitle')};
  margin-right: 5px;
  ${Title}:hover & {
    color: ${theme('banner.title')};
  }

  ${css.media.mobile`
    ${css.cutFrom('60px')};
`};
`
export const RepoName = styled.div`
  color: ${theme('thread.repoTitle')};
  ${Title}:hover & {
    color: ${theme('banner.title')};
  }
  ${css.media.mobile`
    ${css.cutFrom('80px')};
`};
`
export const TagsWrapper = styled.div`
  margin-top: 4px;
`
export const StatusInfo = styled.div`
  ${css.flex()};
  margin-top: 3px;
`

export const StatusSection = styled.div`
  ${css.flex()};
  margin-right: 6px;
`
export const ForkSection = styled(StatusSection)`
  ${css.media.mobile`
    display: none;
  `};
`

export const StatusNum = styled.div`
  color: ${theme('thread.articleDigest')};
`
const StatusIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  margin-right: 3px;
  margin-top: 2px;
`
export const StarIcon = styled(StatusIcon)`
  margin-right: 5px;
  width: 14px;
  height: 14px;
`
export const ForkIcon = styled(StatusIcon)`
  margin-top: 2px;
`
