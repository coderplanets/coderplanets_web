import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.article`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 22px;
  padding-bottom: 22px;
  border-radius: 4px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme('thread.articleSpliter')};
  opacity: ${({ active }) => (active ? 0.6 : 1)};
  &:hover {
    background: ${theme('thread.articleHover')};
  }
`

export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`
export const TopHalf = styled.div`
  display: flex;
`
export const SecondHalf = styled.ul`
  margin-left: 10px;
  margin-top: -10px;
`

export const Builder = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  opacity: ${theme('avatarOpacity')};
`

export const Breif = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
`

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  max-width: 450px;
  display: flex;
`

export const Producer = styled.a`
  color: ${theme('banner.title')};
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }
`
export const RepoName = styled.a`
  color: ${theme('banner.title')};
  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
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
export const StarIcon = StatusIcon.extend`
  margin-top: 0px;
`
export const ForkIcon = StatusIcon.extend`
  margin-top: 2px;
`

export const TitleLink = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 2px;
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  text-decoration: underline;
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
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`

export const BodyDigest = styled.li`
  color: ${theme('thread.articleDigest')};
  margin-top: 5px;
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.85rem;
  max-width: 85%;

  &:hover {
    cursor: pointer;
    background: ${theme('thread.articleHover')};
  }
`

export const BuildByWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 12px;
`
