import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.article`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
  opacity: ${({ active }) => (active ? 0.6 : 1)};

  &:hover {
    background: ${theme('thread.articleHover')};
  }
`

export const PosterWrapper = styled.div`
  position: relative;
`

export const Poster = styled.img`
  height: 138px;
  width: 246px;
  opacity: ${theme('avatarOpacity')};
`

export const Duration = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #2e2e2f;
  color: white;
  font-size: 0.8rem;
  padding: 0 4px;
`

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

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
export const Main = styled.div`
  margin-left: 10px;
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
  flex-grow: 1;
`

export const Breif = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  color: ${theme('thread.articleTitle')};
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

export const ViewInfo = styled.div`
  display: flex;
`

export const ViewIcon = styled(Img)`
  fill: ${theme('thread.articleLink')};
  width: 12px;
  height: 12px;
`

export const Extra = styled.li`
  display: flex;
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
  &:hover {
    cursor: pointer;
  }
`

export const OriginalAuthorLink = styled.a`
  transition: color 0.3s;
  color: ${theme('thread.extraInfo')};

  &:hover {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
  }
`

export const BottomAuthorWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 2px;
`

export const ButtonAvatar = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.8;
`

export const ButtonNickname = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-left: 5px;
`
