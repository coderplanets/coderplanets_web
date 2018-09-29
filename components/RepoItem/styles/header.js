import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
`
export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  max-width: 450px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`
export const LangDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`
export const PopoverInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`
export const Owner = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-right: 5px;
  ${Title}:hover & {
    color: ${theme('banner.title')};
  }
`
export const RepoName = styled.div`
  color: ${theme('thread.articleTitle')};
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
  width: 10px;
  height: 10px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: #9cd090;
  display: inline-block;
  opacity: ${theme('tags.dotOpacity')};
`

export const StatusInfo = styled.div`
  display: flex;
  margin-top: 3px;
`

export const StatusSection = styled.div`
  display: flex;
  margin-right: 6px;
`
export const StatusNum = styled.div``

const StatusIcon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
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
