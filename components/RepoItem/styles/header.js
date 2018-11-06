import styled from 'styled-components'

import Img from '../../Img'
import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  ${cs.flexGrow()};
  margin-left: 10px;
`
export const Title = styled.div`
  ${cs.flex('align-center')};

  margin-bottom: 10px;
  font-size: 1.2rem;
  max-width: 450px;
  &:hover {
    cursor: pointer;
  }
`
export const LangDot = styled.div`
  ${cs.circle('12px')};
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
`
export const RepoName = styled.div`
  color: ${theme('thread.repoTitle')};
  ${Title}:hover & {
    color: ${theme('banner.title')};
  }
`
export const TitleTag = styled.div`
  color: ${theme('thread.articleTag')};
  margin-left: 10px;
  margin-top: 4px;
  opacity: 0.8;
  font-size: 0.9rem;
  flex-grow: 1;
`

export const TitleTagDot = styled.span`
  ${cs.circle('10px')};
  margin-right: 4px;
  background-color: #9cd090;
  display: inline-block;
  opacity: ${theme('tags.dotOpacity')};
`

export const StatusInfo = styled.div`
  ${cs.flex()};
  margin-top: 3px;
`

export const StatusSection = styled.div`
  ${cs.flex()};
  margin-right: 6px;
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
