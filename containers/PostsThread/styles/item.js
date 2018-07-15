import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

export const Wrapper = styled.article`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 4px;
  background: ${({ current, active }) =>
    current.id === active.id ? theme('thread.articleHover') : ''};
  background: ${({ index }) =>
    index % 2 === 0 ? theme('thread.articleStrip') : ''};
  opacity: ${({ current, active }) =>
    active.id && current.id !== active.id ? 0.6 : 1};

  &:hover {
    cursor: pointer;
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
export const Avatar = styled.img`
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
  font-size: 1rem;
  @media (max-width: 1450px) {
    max-width: 500px;
  }
  @media (max-width: 1250px) {
    max-width: 450px;
  }
  @media (max-width: 1100px) {
    max-width: 350px;
  }
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

export const TitleLink = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 2px;
  color: ${theme('thread.articleLink')};
  margin-left: 10px;
  opacity: 0.8;
  text-decoration: underline;
`
export const TitleTag = styled.div`
  color: ${theme('thread.articleTag')};
  margin-left: 10px;
  margin-top: 2px;
  opacity: 0.8;
  font-size: 0.9rem;
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  position: absolute;
  top: 6px;
  left: -5px;
  width: 12px;
  height: 12px;
`

export const Extra = styled.li`
  display: inline;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 0.85rem;
  color: ${theme('thread.extraInfo')};
`

export const BodyDigest = styled.li`
  margin-top: 5px;
  color: ${theme('thread.articleDigest')};
  margin-right: 20px;
  white-space: normal;
  display: block;
  font-size: 0.85rem;
`
